"use client";

import Link from "next/link"
import { componentList } from "@/blocks/data"
import { ControlPanel } from "./control-panel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { BlocksIcon, HomeIcon, LucideIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useCtx } from "./state-provider"
import { useState } from "react"
import { ThemeButton } from "./theme-button";
import { ColorSwatch } from "./color-swatch";

type NavOption = {
    type?: 'control' | 'link';
    label: string;
    icon: LucideIcon;
    href?: string;
    action?: () => void;
}



const NavbarMobile = () => {
    const { ctx, mergeCtx } = useCtx()
    const { theme, setTheme } = useTheme()
    const [colorOpen, setColorOpen] = useState(false)

    const mobileOptions: NavOption[] = [
        // {
        //     type: 'control',
        //     label: 'Theme',
        //     icon: MoonIcon,
        //     action: () => setTheme(theme === 'dark' ? 'light' : 'dark')
        // },
        // {
        //     type: 'control',
        //     label: 'Colors',
        //     icon: ThemeButton as unknown as LucideIcon,
        //     action: () => {}
        // },

        {
            // type: 'link',
            label: 'Home',
            icon: HomeIcon,
            href: '/'
        },
        {
            // type: 'link',
            label: 'Browse',
            icon: BlocksIcon,
            href: '/browse'
        },
    ]
    return (
        <Sheet>
            <SheetTrigger className="absolute top-1 left-1 z-10"><Button size="icon" variant='ghost'><MenuIcon /></Button></SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                    <SheetDescription>
                        {/* This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers. */}
                        <div className="bg-transparent h-screen max-h-screen flex flex-col gap-2 p-2 lg:shadow-xl z-10">
                            <div className="flex pt-1">
                                <Link href="/" passHref>
                                    <h1 className="text-md font-medium">Blocks</h1>
                                </Link>
                            </div>

                            <ControlPanel />

                            <div className="w-full flex flex-col gap-2">
                                {mobileOptions.filter(opt => opt.type === 'link').map(opt => opt.href
                                    ? <Link key={opt.label} href={opt.href} passHref><Button className="w-full justify-start gap-2 pl-0" variant='link'><opt.icon size="20"/>{opt.label}</Button></Link>
                                    : <Button key={opt.label} className="w-full justify-start gap-2 pl-0" variant="link" onClick={opt.action}><opt.icon size="20" />{opt.label}</Button> 
                                    )}
                            </div>

                            <Accordion type="single" collapsible>
                                {Object.entries(componentList).map(([key, category]) => 
                                    <AccordionItem value={key}>
                                        <AccordionTrigger><Link href={`/${key}`} className="text-sm font-light">{category.name}</Link></AccordionTrigger>
                                        <AccordionContent>
                                            {Object.entries(category.components).map(([slug, comp]) => <Link key={slug} href={`/${key}/${slug}`} className="text-sm font-light">{comp.name}</Link>)}
                                        </AccordionContent>
                                    </AccordionItem>
                                )}
                            </Accordion>


                            {/* <div className="flex flex-1 flex-col items-start mt-2 gap-2 h-full max-h-[70vh] overflow-y-scroll">
                                {Object.entries(componentList).map(([key, category]) => {
                                    return (
                                        <div key={category.name} className="flex flex-col gap-2 text-sm items-start w-full">
                                            <Link key={category.name} href={`/${key}`} className="font-medium">{category.name}</Link>
                                            {Object.entries(category.components).map(([slug, comp]) => <Link key={slug} href={`/${key}/${slug}`} className="text-sm font-light">{comp.name}</Link>)}
                                        </div>
                                    )
                                })}
                            </div> */}
                            
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

const NavbarDesktop = () => {
    return (
        <div className="bg-white/80 dark:bg-black h-screen max-h-screen flex flex-col gap-2 p-2 lg:shadow-xl z-10">
            <div className="flex pt-1">
                <h1 className="text-md font-medium">Blocks</h1>
            </div>
            <div className="relative">
                <ControlPanel />
            </div>

            {/* <div className="flex pt-1">
                <h2 className="text-
                md font-medium">Components</h2>
            </div> */}

            <Accordion type="single" collapsible className="mx-1">
                {Object.entries(componentList).map(([key, category]) =>
                    <AccordionItem value={key} className="">
                        <AccordionTrigger className="py-1"><Link href={`/${key}`} className="text-sm font-light">{category.name}</Link></AccordionTrigger>
                        <AccordionContent className="flex flex-col">
                            {Object.entries(category.components).map(([slug, comp]) => <Link key={slug} href={`/${key}/${slug}`} className="text-sm font-light p-1 rounded hover:bg-gray-500/10 duration-200">{comp.name}</Link>)}
                        </AccordionContent>
                    </AccordionItem>
                )}
            </Accordion>
{/* 
            <div className="flex flex-col mt-2 gap-6 h-full overflow-y-scroll px-1" tabIndex={0}>
                {Object.entries(componentList).map(([key, category]) => {
                    return (
                        <div key={category.name} className="flex flex-col gap-0 text-sm" >
                            <Link href={`/${key}`} passHref tabIndex={-1}><Button variant="link" className="font-medium justify-start pl-1">{category.name}</Button></Link>
                            {Object.entries(category.components).map(([slug, comp]) => <Link key={slug} href={`/${key}/${slug}`} passHref tabIndex={-1}><Button variant="link" size="sm" className="text-sm font-light justify-start pl-2">{comp.name}</Button></Link>)}
                        </div>
                    )
                })}
            </div>
             */}
        </div>
    )
}

export const Navbar = () => {

    return (
        <>
            <div className="block lg:hidden"><NavbarMobile /></div>
            <div className="hidden lg:block"><NavbarDesktop /></div>
        </>
    )
}
"use client"
import Link from "next/link"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tip } from "@/components/tip"
import { HomeIcon, FrameIcon, BlocksIcon, Settings2Icon, MonitorIcon, Fullscreen, TabletIcon, Smartphone, SunIcon, MoonIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { HslColor, HslColorPicker } from 'react-colorful'
import { useCtx } from "./state-provider"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils" 
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Card } from "./ui/card"
import { Dialog, DialogHeader, DialogTrigger } from "./ui/dialog"
import { DialogContent } from "@radix-ui/react-dialog"

export const ControlPanel = () => {
    const { ctx, mergeCtx } = useCtx()
    const { theme, setTheme } = useTheme()
    const [colorOpen, setColorOpen] = useState(false)

    return (
        <>  
            <ToggleGroup type="single" defaultValue="home" className="h-auto gap-4 lg:gap-1 justify-start" variant="outline">
                <Tip text="Go Home">
                    <Link href="/" passHref tabIndex={-1}>
                        <ToggleGroupItem value="home" aria-label="Toggle desktop" className="p-4 lg:p-2 h-auto" tabIndex={1}>
                            <HomeIcon size="20" />
                        </ToggleGroupItem>
                    </Link>
                </Tip>
                <Tip text="Browse layouts">
                    <Link href="/layout" passHref tabIndex={-1}>
                        <ToggleGroupItem value="layouts" aria-label="Layouts" className="p-4 lg:p-2 h-auto" tabIndex={2}>
                            <FrameIcon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                </Tip>
                 <Tip text="Browse components">
                    <Link href="/heros" passHref tabIndex={-1}>
                        <ToggleGroupItem value="hero" aria-label="hero" className="p-4 lg:p-2 h-auto" tabIndex={3}>
                            <BlocksIcon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                 </Tip>
               
               
                
            </ToggleGroup>

            {/* <div className="flex pt-1">
                <h2 className="text-sm font-medium">View</h2>
            </div> */}

            <ToggleGroup type="single" variant="outline" className="mt-1 hidden lg:flex mt-4 lg:mt-1 h-auto gap-4 lg:gap-1 justify-start" tabIndex={-1}>
                {/* <Tip text="Full screen view">
                    <ToggleGroupItem value="full-screen" aria-label="Toggle full-screen view" className="p-2 h-auto">
                        <Fullscreen size="20"/>
                    </ToggleGroupItem>
                </Tip> */}
                <Tip text="Desktop view">
                    <ToggleGroupItem value="desktop" aria-label="Toggle desktop view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'desktop' })} tabIndex={4}>
                        <MonitorIcon size="20"/>
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Tablet view">
                    <ToggleGroupItem value="tablet" aria-label="Toggle tablet view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'tablet' })} tabIndex={5}>
                        <TabletIcon size="20"/>
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Mobile view">
                    <ToggleGroupItem value="mobile" aria-label="Toggle mobile view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'mobile' })} tabIndex={6}>
                        <Smartphone size="20"/>
                    </ToggleGroupItem>
                </Tip>
            </ToggleGroup>


            <ToggleGroup type="single" variant="outline" className="mt-2 lg:mt-1 h-auto gap-4 lg:gap-1 justify-start" tabIndex={-1}>


                <Tip text="Edit settings">
                    <Link href="/settings" passHref tabIndex={-1}>
                        <ToggleGroupItem value="settings" aria-label="Toggle desktop" className="p-4 lg:p-2 h-auto" tabIndex={7}>
                            <Settings2Icon size="20" />
                        </ToggleGroupItem>
                    </Link>
                </Tip>
                <Tip text={theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'}>
                    <ToggleGroupItem suppressHydrationWarning  value="mode" aria-label="Toggle mobile view" className="p-4 lg:p-2 h-auto" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} tabIndex={8}>
                        {theme === 'dark' ? <SunIcon size="20"/> : <MoonIcon size="20"/>}
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Change theme color">
                    <Dialog>
                        <DialogTrigger asChild>
                            <ToggleGroupItem value="color" aria-label="Toggle desktop" className="p-4 lg:p-2 h-auto" tabIndex={8}>
                                <div className="rounded-sm overflow-hidden"  >
                                    <div className="bg-bks-primary w-[1.2rem] h-[.6rem]"></div>
                                    <div className="bg-bks-secondary w-full h-[.6rem]"></div>
                                </div>
                            </ToggleGroupItem>
                            </DialogTrigger>
                            <DialogContent>
                            <Card className="absolute left-8 lg:left-0 flex flex-col gap-4 p-2 mt-11 lg:mt-1 z-20" >
                                    <p className="">Primary color</p>
                                    <HslColorPicker color={ctx.primaryColor} onChange={(newColor: HslColor) => mergeCtx({ primaryColor: newColor })} />
                                    <p className="">Secondary color</p>
                                    <HslColorPicker color={ctx.secondaryColor} onChange={(newColor: HslColor) => mergeCtx({ secondaryColor: newColor })} />
                                </Card>
                            </DialogContent>
                    </Dialog>
                </Tip>
</ToggleGroup>

            
        </>
    )
}

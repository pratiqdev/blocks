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

export const ControlPanel = () => {
    const { ctx, mergeCtx } = useCtx()
    const { theme, setTheme } = useTheme()
    const [colorOpen, setColorOpen] = useState(false)

    return (
        <>  
            <ToggleGroup type="single" defaultValue="home" className="h-auto" variant="outline">
                <Tip text="Go Home">
                    <Link href="/" passHref>
                        <ToggleGroupItem value="home" aria-label="Toggle desktop" className="p-2 h-auto">
                            <HomeIcon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                </Tip>
                <Tip text="Browse layouts">
                    <Link href="/layout" passHref>
                        <ToggleGroupItem value="layouts" aria-label="Layouts" className="p-2 h-auto">
                            <FrameIcon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                </Tip>
                 <Tip text="Browse components">
                    <Link href="/heros" passHref>
                        <ToggleGroupItem value="hero" aria-label="hero" className="p-2 h-auto">
                            <BlocksIcon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                 </Tip>
                <Tip text="Edit settings">
                    <Link href="/settings" passHref>
                        <ToggleGroupItem value="settings" aria-label="Toggle desktop" className="p-2 h-auto">
                            <Settings2Icon size="20"/>
                        </ToggleGroupItem>
                    </Link>
                </Tip>
               
                
            </ToggleGroup>

            {/* <div className="flex pt-1">
                <h2 className="text-sm font-medium">View</h2>
            </div> */}

            <ToggleGroup type="single" variant="outline">
                {/* <Tip text="Full screen view">
                    <ToggleGroupItem value="full-screen" aria-label="Toggle full-screen view" className="p-2 h-auto">
                        <Fullscreen size="20"/>
                    </ToggleGroupItem>
                </Tip> */}
                <Tip text="Desktop view">
                    <ToggleGroupItem value="desktop" aria-label="Toggle desktop view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'desktop' })}>
                        <MonitorIcon size="20"/>
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Tablet view">
                    <ToggleGroupItem value="tablet" aria-label="Toggle tablet view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'tablet' })}>
                        <TabletIcon size="20"/>
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Mobile view">
                    <ToggleGroupItem value="mobile" aria-label="Toggle mobile view" className="p-2 h-auto" onClick={() => mergeCtx({ view: 'mobile' })}>
                        <Smartphone size="20"/>
                    </ToggleGroupItem>
                </Tip>
                <Tip text={theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'}>
                    <ToggleGroupItem  value="mode" aria-label="Toggle mobile view" className="p-2 h-auto" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </ToggleGroupItem>
                </Tip>
                <Tip text="Change theme color">
                    <ToggleGroupItem value="color" aria-label="Toggle desktop" className="p-2 h-auto" onClick={() => setColorOpen(b => !b)} >
                        <div className="relative">
                            <div className="bg-blocks-theme w-5 h-5 rounded"></div>
                            <AnimatePresence>
                                {colorOpen
                                    && <motion.div key="hsl" className="absolute left-5" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                                        <HslColorPicker color={ctx.color} onChange={(newColor: HslColor) => mergeCtx({ color: newColor })} />
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                    </ToggleGroupItem>
                </Tip>
</ToggleGroup>

            
        </>
    )
}

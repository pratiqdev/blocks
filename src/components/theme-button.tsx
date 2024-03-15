"use client"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { SunIcon, MoonIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const ThemeButton = (props:any) => {
    const { theme, setTheme } = useTheme()

    return (
        <Button suppressHydrationWarning value="theme toggle" aria-label="Toggle mobile view" variant="ghost" {...props} className={cn("p-2 h-auto flex items-center justify-start gap-2", props.className)} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
            { theme === 'dark' ? <SunIcon size="20" /> : <MoonIcon size="20" />}{props.children}
        </Button>
    )
}
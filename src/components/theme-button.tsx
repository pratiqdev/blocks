"use client"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { SunIcon, MoonIcon } from "lucide-react"

export const ThemeButton = (props:any) => {
    const { theme, setTheme } = useTheme()

    return (
        <Button suppressHydrationWarning  value="theme toggle" aria-label="Toggle mobile view" className="p-2 h-auto" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} {...props}>
            { theme === 'dark' ? <SunIcon size="20" /> : <MoonIcon size="20" />}
        </Button>
    )
}
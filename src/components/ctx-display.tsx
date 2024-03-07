"use client"
import { useCtx } from "@/components/state-provider"
import { useTheme } from "next-themes"

export const CtxDisplay = () => {
    const { ctx } = useCtx()
    const { theme } = useTheme()
    return <pre>{JSON.stringify({ ctx, theme }, null, 2)}</pre>
}
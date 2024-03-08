"use client"
import { useEffect, useState } from "react"
import { useCtx } from "@/components/state-provider"
import { useTheme } from "next-themes"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"

export const ContrastDialog = () => {
    const { ctx,   mergeCtx } = useCtx()
    const { theme, setTheme } = useTheme()
    const [reason, setReason] = useState<'should dark' | 'should light' | null>(null)
    const high = 80
    const low = 30

    useEffect(() => {
        if(ctx.contrastWarning){
            if ((ctx.primaryColor.l >= high || ctx.secondaryColor.l >= high) && theme !== 'dark') setReason('should dark')
            else if ((ctx.primaryColor.l < low || ctx.secondaryColor.l < low) && theme !== 'light') setReason('should light')
            else setReason(null)
        }
    }, [theme, ctx.primaryColor.l, ctx.secondaryColor.l, ctx.contrastWarning])

    return (
        <>
            <Dialog open={!!reason && ctx.contrastWarning} onOpenChange={() => setReason(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <p className="text-xl flex gap-2">
                                Poor contrast with theme <div className="bg-background text-blocks-theme border rounded px-1">Example text</div>
                            </p>
                        </DialogTitle>
                        <DialogDescription>
                            <p className="text-lg py-4">
                                The selected color is very {reason === 'should dark' ? 'light' : 'dark'} 
                                {` `}and should only be used against a {reason === 'should dark' ? 'dark' : 'light'} 
                                {` `}background for good contrast.
                            </p>

                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex !justify-between">
                        <Button variant="outline" onClick={() => mergeCtx({ contrastWarning: false })}>Don&apos;t remind me</Button>
                        <div>
                            {reason === 'should dark' ? <>
                                <Button onClick={() => setReason(null)} variant="ghost">Stay light</Button>
                                <Button onClick={() => setTheme('dark')}>Go dark</Button>
                            </>
                            : <>
                                    <Button onClick={() => setReason(null)} variant="ghost">Stay dark</Button>
                                    <Button onClick={() => setTheme('light')}>Go light</Button>
                            </>}
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )

}
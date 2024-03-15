import { Dialog, DialogContent } from "./ui/dialog"
import { SecondaryHeading } from "./typography"
import { useCtx } from "./state-provider"
import { HslColor, HslColorPicker,  } from "react-colorful"
import { ThemeButton } from "./theme-button"
import { Button } from "./ui/button"
import { ColorWheelIcon } from '@radix-ui/react-icons'
import { Lightbulb, Paintbrush } from "lucide-react"
import { Tip } from "./tip"
import { useTheme } from "next-themes"

export const ColorDialog = () => {
    const { ctx, mergeCtx } = useCtx()
    const { theme } = useTheme()
    
    return (
        <Dialog open={ctx.isColorPanelOpen} onOpenChange={v => mergeCtx({ isColorPanelOpen: v })} >
            <DialogContent className="max-w-dialog rounded-md" >
                <SecondaryHeading>Theme colors</SecondaryHeading>
                <div className="items-center flex justify-between">
                    <div>
                        <p className="text-bks-primary">Primary color</p>
                        <HslColorPicker className="max-w-[40vw] mt-1" color={ctx.primaryColor} onChange={(newColor: HslColor) => mergeCtx({ primaryColor: newColor })} />
                        <div className="flex items-center p-1 px-3 justify-between">
                            <Tip text="Hue">
                                <div className="flex gap-1 items-center">
                                    <b>H</b>
                                    <p>{ctx.primaryColor.h}</p>
                                </div>
                            </Tip>
                            <Tip text="Hue">
                                <div className="flex gap-1 items-center">
                                    <b>S</b>
                                    <p>{ctx.primaryColor.h}</p>
                                </div>
                            </Tip>
                            <Tip text="Lightness">
                                <div className="flex gap-1 items-center">
                                    <b>L</b>
                                    <p>{ctx.primaryColor.l}</p>
                                </div>
                            </Tip>
                        </div>
                    </div>
                    <div>
                        <p className="text-bks-secondary">Secondary color</p>
                        <HslColorPicker className="max-w-[40vw] mt-1" color={ctx.secondaryColor} onChange={(newColor: HslColor) => mergeCtx({ secondaryColor: newColor })} />
                        <div className="flex items-center p-1 px-3 justify-between">
                            <Tip text="Hue">
                                <div className="flex gap-1 items-center">
                                    <b>H</b>
                                    <p>{ctx.secondaryColor.h}</p>
                                </div>
                            </Tip>
                            <Tip text="Hue">
                                <div className="flex gap-1 items-center">
                                    <b>S</b>
                                    <p>{ctx.secondaryColor.h}</p>
                                </div>
                            </Tip>
                            <Tip text="Lightness">
                                <div className="flex gap-1 items-center">
                                    <b>L</b>
                                    <p>{ctx.secondaryColor.l}</p>
                                </div>
                            </Tip>
                        </div>
                    </div>
                </div>
                <div className="bg-bks-gradient-strong h-3 w-full rounded-full"></div>

                <div className="flex justify-between">
                    <ThemeButton>{theme === 'dark' ? 'Toggle light mode' : 'Toggle dark mode'}</ThemeButton>
                    <Button onClick={() => mergeCtx({ isColorPanelOpen: false })}>Close</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
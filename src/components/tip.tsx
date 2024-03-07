import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Tip = ({ children, text }:{ children?: React.ReactNode, text?: React.ReactNode }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
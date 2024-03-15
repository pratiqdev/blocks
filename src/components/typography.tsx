import { cn } from "@/lib/utils"


export const MainHeading = (props: any) =>
    <h1 {...props} className={cn("text-2xl font-medium text-bks-primary", props.className)}>
        {props.children}
    </h1>

export const SecondaryHeading = (props:any) => 
    <h2 {...props} className={cn("text-xl font-medium text-bks-primary", props.className)}>
        {props.children}
    </h2>

export const SubHeading = (props: any) =>
    <h3 {...props} className={cn("text-md font-medium text-bks-secondary", props.className)}>
        {props.children}
    </h3>


export const BodyText = (props: any) =>
    <p {...props} className={cn("text-sm text-gray-700 dark:text-gray-300 max-w-[70ch]", props.className)}>
        {props.children}
    </p>

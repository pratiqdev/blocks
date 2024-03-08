"use client"
import { cn } from "@/lib/utils";
import { useCtx } from "./state-provider";
import { useState } from "react";

export function Panel({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params?: any
}>) {
    const { ctx } = useCtx()

    return (
        <>
        <div className={cn(
            "hidden lg:flex justify-stretch items-stretch w-full flex-1 h-[96vh] rounded-xl border-[.5rem] bg-gray-400 dark:bg-gray-400 border-gray-400 dark:border-gray-400 duration-300 mx-auto bg-white @container",
            ctx.view === 'tablet' && "w-[38rem] h-[55rem] border-[1rem] border-y-[1.3rem]",
            ctx.view === 'mobile' && "w-[23rem] h-[48rem] border-[1rem] border-y-[2.5rem]"
            )}>
            <div className={cn(
                "w-full h-full overflow-hidden overflow-y-scroll bg-white dark:bg-gray-950 flex flex-col items-stretch justify-stretch rounded",
                ctx.view === "tablet" && "rounded-md",
                ctx.view === "mobile" && "rounded-lg",
            )}>
                {children}
            </div>
        </div>
        <div className="flex lg:hidden justify-center items-center w-full h-full @container">
            {children}
        </div>
        </>
    );
}
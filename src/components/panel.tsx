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
        <div className={cn(
            "w-full flex-1 border border-red-500 h-[96vh] rounded-xl  border-[.5rem] bg-gray-200 dark:bg-gray-400 border-gray-200 dark:border-gray-400 duration-300 mx-auto bg-white @container",
            ctx.view === 'tablet' && "w-[38rem] h-[55rem] border-[1rem] border-y-[1.3rem]",
            ctx.view === 'mobile' && "w-[23rem] h-[48rem] border-[1rem] border-y-[2.5rem]"
        )}>
            <div className="w-full h-full rounded-md overflow-hidden overflow-y-scroll bg-white dark:bg-gray-950">
                {children}
            </div>
        </div>
    );
}
import { CompMeta } from "./data"

import Image from "next/image"

export function Component() {
    return (
        <div className="flex relative justify-center items-center w-full h-full rounded">
            <Image
                alt="Hero"
                className="absolute overflow-hidden object-cover z-0 opacity-20"
                fill
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="inset-0 flex flex-col items-center justify-center w-full gap-4 p-4 py-8 flex-1 text-center z-10">
                <h1 className="text-3xl @md:text-5xl font-extrabold tracking-tighter text-bks-primary">
                    Beautiful Websites
                </h1>
                <div className="block h-[2px] w-[20rem] max-w-[70%] bg-bks-primary" />
                <p className="max-w-[700px] text-gray-500 @md:text-xl dark:text-gray-400">
                    Easily create stunning web experiences with our platform. No complicated setup. Just beautiful results.
                </p>
            </div>
        </div>
    )
}


export const meta: CompMeta = {
    slug: 'hero-3',
    name: 'Banner image',
    description: 'with title and subtitle',
    code: 
`
import Image from "next/image"

export function Component() {
    return (
        <div className="flex relative justify-center items-center w-full h-full rounded">
            <Image
                alt="Hero"
                className="absolute overflow-hidden object-cover z-0 opacity-20"
                fill
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="inset-0 flex flex-col items-center justify-center w-full gap-4 p-4 py-8 flex-1 text-center z-10">
                <h1 className="text-3xl @md:text-5xl font-extrabold tracking-tighter text-bks-primary">
                    Beautiful Websites
                </h1>
                <div className="block h-[2px] w-[20rem] max-w-[70%] bg-bks-primary" />
                <p className="max-w-[700px] text-gray-500 @md:text-xl dark:text-gray-400">
                    Easily create stunning web experiences with our platform. No complicated setup. Just beautiful results.
                </p>
            </div>
        </div>
    )
}`
}
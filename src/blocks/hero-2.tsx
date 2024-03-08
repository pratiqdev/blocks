import Image from "next/image"

export const name = 'Hero 2'
export const description = 'this is a hero component'
export const code = 
`<div className="bg-red-100 p-5">
    hero 2
</div>`

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fytcoI2i9NY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export function Component() {
    return (
        <div className="flex justify-center items-center relative w-full h-full min-h-[43rem] @md:min-h-[52.5rem] @lg:min-h-[94vh]">
            {/* <Image
                alt="Hero"
                className="absolute overflow-hidden object-cover muted"
                fill
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            /> */}
            <div className="inset-0 flex flex-col items-center justify-center w-full gap-4 p-4 text-center bg-white/30 dark:bg-black/10">
                <div className="block sm:hidden">OUTER def</div>
                <div className="hidden sm:block md:hidden">OUTER sm</div>
                <div className="hidden md:block lg:hidden">OUTER md</div>
                <div className="hidden lg:block xl:hidden">OUTER lg</div>
                <div className="block @sm:hidden">INNER def</div>
                <div className="hidden @sm:block @md:hidden">INNER sm</div>
                <div className="hidden @md:block @lg:hidden">INNER md</div>
                <div className="hidden @lg:block @xl:hidden">INNER lg</div>
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl @md:text-7xl @lg:text-8xl/line-through text-blocks-theme">
                    Beautiful Websites
                </h1>
                <div className="block h-[2px] w-[20rem] max-w-[70%] bg-blocks-theme" />
                <p className="max-w-[700px] text-gray-500 @md:text-xl dark:text-gray-400">
                    Easily create stunning web experiences with our platform. No complicated setup. Just beautiful results.
                </p>
            </div>
        </div>
    )
}

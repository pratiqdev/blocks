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
        <div className="relative w-full h-full min-h-[43rem] @md:min-h-[52.5rem] @lg:min-h-[94vh]">
            <Image
                alt="Hero"
                className=" overflow-hidden object-cover"
                fill
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full gap-4 p-4 text-center bg-black/30">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl @md:text-7xl @lg:text-8xl/line-through">
                    Beautiful Websites
                </h1>
                <p className="max-w-[700px] text-gray-500 @md:text-xl dark:text-gray-400">
                    Easily create stunning web experiences with our platform. No complicated setup. Just beautiful results.
                </p>
            </div>
        </div>
    )
}

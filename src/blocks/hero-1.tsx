import { CompMeta } from "./data"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Component() {
    return (
        <section className="flex h-full w-full py-12 @md:py-24  @lg:py-32 @xl:py-48">
            <div className="container px-4 @md:px-6 flex flex-col items-center justify-between @md:flex-row gap-6">
                <div className="text-center @md:text-left">
                    <h1 className="text-3xl @md:text-3xl @lg:text-5xl font-bold tracking-tighter text-bks-primary">The Future of Web Development</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 tracking-wide">
                        Experience the next generation of web development. Sign up to join the beta.
                    </p>
                </div>
                <Card className="@md:ml-6 min-w-[16rem] border-bks-secondary @thumb:border-2 ">
                    <CardHeader className="p-4 @lg:p-6">
                        <CardTitle className="text-bks-primary">Sign Up for Beta</CardTitle>
                        <CardDescription className="text-bks-secondary">Join our beta program to explore the future of web development.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 p-4 @lg:p-6">
                        <form className="space-y-2">
                            <Input placeholder="Name" required type="text" />
                            <Input placeholder="Email" required type="email" />
                            <Button type="submit" className="bg-bks-primary">Sign Up</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}


export const meta: CompMeta = {
    slug: 'hero-1',
    name: 'Cool beta',
    description: 'cta and sign up',
    code: `<p>!</p>`
}
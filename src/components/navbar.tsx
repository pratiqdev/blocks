import Link from "next/link"
import { componentList } from "@/blocks/data"
import { ControlPanel } from "./control-panel"

export const Navbar = async () => {

    return (
        <div className="relative h-screen max-h-screen flex flex-col gap-2 p-2 shadow-xl z-10">
            <div className="flex pt-1">
                <Link href="/" passHref>
                    <h1 className="text-md font-medium">Blocks</h1>
                </Link>
            </div>
            <div className="relative">
                <ControlPanel />
            </div>

            <div className="flex pt-1">
                <h2 className="text-md font-medium">Components</h2>
            </div>

            <div className="flex flex-col mt-2 gap-6 h-full overflow-y-scroll border">
                {Object.entries(componentList).map(([key, category])=> {
                    return (
                        <div key={category.name} className="flex flex-col gap-2 text-sm">
                            <Link href={`/${key}`} className="font-medium">{category.name}</Link>
                            {Object.entries(category.components).map(([slug, comp]) => <Link key={slug} href={`/${key}/${slug}`} className="text-sm font-light">{comp.name}</Link>)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
import { componentList } from "@/blocks/data";
import { CtxDisplay } from "@/components/ctx-display";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-2xl">Blocks</h1>
      {Object.entries(componentList).map(([slug, comp]) => <Link key={slug} href={slug}>{comp.name}</Link>)}
      <Card className="border-blocks-theme shadow-xl">
        <CardHeader>
          <h2 className="text-blocks-theme text-3xl tracking-wider font-semibold">Blocks</h2>
        </CardHeader>
        <CardContent>
          <p className="text-large text-blocks-theme">
            Collection of premade content sections using
          </p>
          <ul>
            <li>@shadcn/ui</li>
            <li>TailwindCSS</li>
            <li>Framer Motion</li>
            <li>Next.js 14</li>
          </ul>
        </CardContent>
      </Card>
      <CtxDisplay />
    </main>
  );
}

"use client"
import { componentList } from "@/blocks/data";
import { useCtx } from "@/components/state-provider";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Item = ({ children }:{ children: React.ReactNode }) => (
  <div className="flex items-center justify-between bg-gray-500/10 hover:bg-gray-500/20 px-4 py-4 rounded-lg duration-200">
    {children}
  </div>
)

export default function Home() {
  const { ctx, mergeCtx } = useCtx()

  return (
    <div className="flex min-h-screen flex-col items-center p-4 border border-green-500 max-w-screen max-h-screen overflow-hidden overflow-y-scroll">
      <h1 className="text-2xl">Browse</h1>

      <div className="flex flex-col gap-2 lg:gap-4 w-full lg:min-w-[80ch] max-w-screen mt-6 items-center">
        {/* <Accordion type="single" collapsible className="mx-1"> */}
          {Object.entries(componentList).map(([key, category]) =>
          <>
            <h2 className="text-xl mt-6">{category.name}</h2>
            <div className="text-xl flex gap-4 lg:gap-8 max-w-[1200px] mx-auto justify-center flex-wrap w-full border">
                {Object.entries(category.components).map(([slug, comp]) => 
                  <Link key={slug} href={`/${key}/${slug}`} className="text-sm font-light" passHref>
                    <Card key={slug} className="overflow-hidden w-[200px] shadow-lg" >
                      <CardHeader className="p-2 mb-0">
                        <CardTitle className="text-md">{comp.name}</CardTitle>
                        <CardDescription>{comp.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="w-[200px] h-[200px] overflow-hidden flex items-center justify-center pb-0">
                        <div className="@container flex justify-stretch w-full items-start min-w-[400px] max-w-[400px] min-h-[400px] max-h-[400px] bg-bks-primary-t scale-[.5]">
                        {/* <Image fill src={'https://placekitten.com/200/200'} alt="preview image" className="p-2"/> */}
                        <comp.Component />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
            </div>
          </>
        )}




      </div>
    </div>
  );
}

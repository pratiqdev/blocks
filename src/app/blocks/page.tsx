"use client"
import { components } from "@/blocks/data";
import { useCtx } from "@/components/state-provider";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { List, WindowScroller, AutoSizer, CellMeasurer, CellMeasurerCache, } from 'react-virtualized'
import { Panel } from "@/components/panel";
import { ChevronRight } from "lucide-react";

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 400, // Default height for rows
});





export default function BrowsePage() {
  const { ctx, mergeCtx } = useCtx()
  console.log(components)

  const rowRenderer = ({ index, key, style, parent }: { index:number, key:string, style:any, parent:any }) => {
    if(!components[index]) return (
      <div>No component found!</div>
    )

    const { meta, Component } = components[index];
    const { slug, description, name, code } = meta


    return (
       <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        {({ measure }) => (
          <div style={style} onLoad={measure}  key={key} className="w-min p-2">
              <Card key={slug} className="shadow-lg  preview-card ">
                <CardHeader className="p-2 mb-0">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-md">{key} - {name}</CardTitle>
                    <Link key={slug} href={`/blocks/${slug}`} passHref>
                      <ChevronRight />
                    </Link>
                  </div>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="w-full overflow-hidden flex items-center justify-center pb-0  p-2">
                <div className="@container flex flex-1 justify-stretch w-full items-stretch bg-bks-primary-t h-full preview-box rounded">
                    <Component />
                </div>
                </CardContent> 
              </Card>
          </div>
        )}
      </CellMeasurer>


    );
  };




  return (
    <div className="flex min-h-screen flex-col items-center md:p-4  max-h-screen overflow-hidden overflow-y-scroll">
      <Panel>
        <div className=" w-full h-full min-h-screen lg:min-h-auto">
          <AutoSizer className="">
            {(size) => (
              <List
                className=""
                height={size.height}
                rowCount={components.length} // Example row count
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
                scrollToIndex={3}
                width={size.width}
              />
            )}
          </AutoSizer> 
        </div>
      </Panel>
    </div>
  );
}

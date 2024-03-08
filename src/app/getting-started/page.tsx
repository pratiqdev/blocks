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
      <h1 className="text-2xl">Getting Started</h1>

      <div className="flex flex-col gap-2 lg:gap-2 w-full lg:min-w-[80ch] max-w-screen mt-6 items-center">

        <Card className="p-4">
          1. Find your components - and check out the style and layout
          <br />
          2. Toggle views - to examine your component in different views and breakpoints
          <br />
          3. Select your colors - to preview how your theme colors look
          <br />
          4. Switch themes - to preview light and dark modes with your colors and components
          <br />
          5. Open on your mobile device to get a real preview
          <br />
          6. Copy the code - and paste into your project
          <br />
          7. Remove any `@md:` container queries for standard `md:` tailwind queries
        </Card>

      </div>
    </div>
  );
}

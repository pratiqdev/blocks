import { CtxDisplay } from "@/components/ctx-display";
import { Shadcn, Tailwind, Framer, Radix } from "@/components/icons";
import { BodyText, MainHeading, SubHeading } from "@/components/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AtSign, LucideIcon, RemoveFormatting } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Tool = {
  icon: () => React.ReactNode
  title: string;
  text: string;
}

const tools:Tool[] = [
  {
    icon: Shadcn,
    title: 'shadcn/ui',
    text: 'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.'
  },
  {
    icon: Tailwind,
    title: 'Tailwindcss',
    text: 'A utility-first CSS framework packed with classes and utils that can be composed to build any design, directly in your markup.'
  },
  {
    icon: Framer,
    title: 'Framer Motion',
    text: 'Framer Motion is a powerful animation and gesture library for React, offering a declarative API for creating smooth, complex animations and gestures'
  },
  {
    icon: Radix,
    title: 'Radix Icons',
    text: 'Radix is an open-source UI component library for building high-quality, accessible web apps and design systems.'
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen overflow-hidden overflow-y-scroll flex-col items-center justify-start px-2 pt-2 lg:py-4">

      <div className="w-full flex flex-col items-center my-6">
        <MainHeading>Blocks</MainHeading>
        <SubHeading>Collection of premade building blocks</SubHeading>
      </div>

      <div className="flex flex-col gap-2">
        {tools.map(tool => 
          <Card key={tool.title}>
            <div className="flex flex-row items-center gap-2 p-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <tool.icon />
              </div>
              <p className="text-md font-medium">{tool.title}</p>
            </div>
            <BodyText className="flex flex-col p-2 pt-0 text-sm">
              {tool.text}
            </BodyText>
          </Card>
        )}
      </div>




     

      {/* <div className="flex min-h-screen flex-col items-center p-4 border border-green-500 max-w-screen max-h-screen overflow-hidden overflow-y-scroll">
        <h1 className="text-2xl">Getting Started</h1>

        <div className="flex flex-col gap-2 lg:gap-2 w-full lg:min-w-[80ch] max-w-screen mt-6 items-center">

          <Card className="p-4 text-xs">
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
      </div> */}
      {/* <CtxDisplay /> */}
    </main>
  );
}

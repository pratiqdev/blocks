"use client"
import { components } from "@/blocks/data";
import { useCtx } from "@/components/state-provider";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MainHeading } from "@/components/typography";

const Item = ({ children }:{ children: React.ReactNode }) => (
  <div className="flex items-center justify-between bg-gray-500/10 hover:bg-gray-500/20 px-4 py-4 rounded-lg duration-200 gap-4">
    {children}
  </div>
)

export default function Home() {
  const { ctx, mergeCtx } = useCtx()

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4 border border-green-500 max-w-screen">
      <MainHeading>Settings</MainHeading>

      <div className="flex flex-col gap-2 lg:gap-2 w-full lg:min-w-[80ch] max-w-screen mt-6">


        <Item>
          <Label htmlFor="disableThemeWarning" className="flex flex-col gap-1">
            <p className="text-lg">Contrast warning</p>
            <p className="text-sm font-light">Enable the warning for poor contrast with theme colors</p>
          </Label>
          <Switch id="contrastWarning" checked={ctx.contrastWarning} onCheckedChange={() => mergeCtx({ contrastWarning: !ctx.contrastWarning })}/>
        </Item>


        <Item>
          <Label htmlFor="disableThemeWarning" className="flex flex-col gap-1">
            <p className="text-lg">Contrast warning</p>
            <p className="text-sm font-light">Enable the warning for poor contrast with theme colors</p>
          </Label>
          <Switch id="contrastWarning" checked={ctx.contrastWarning} onCheckedChange={() => mergeCtx({ contrastWarning: !ctx.contrastWarning })} />
        </Item>




      </div>
    </div>
  );
}

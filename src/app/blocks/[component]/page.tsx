"use client"
import { useState } from "react";
import { components } from "@/blocks/data";
import { AnimatePresence, motion } from "framer-motion";
import { useCtx } from "@/components/state-provider";
import { CodeBlock } from "@/components/codeblock";


export default function Category({ params }:{ params: { component: string; }}) {
  const { ctx } = useCtx()
  console.log('category params:', params)
  const { Component, meta } = components.find(comp => comp.meta.slug === params.component) ?? {}
  // const Comp = componentList[params.category].components?.[params.component]?.Component
  console.log('component:', Component)


  if(!Component || !meta) return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">No Component found at {params.component}</h1>
    </main>
  )

  return (
    <>
      <AnimatePresence>
        {ctx.codeOpen 
          ? <motion.div
            className="text-monospace h-full w-fill"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <CodeBlock code={meta?.code} />
          </motion.div>
        : <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <Component />
        </motion.div>}
      </AnimatePresence>
    </>
  );
}

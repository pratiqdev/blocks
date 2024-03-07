"use client"
import { useState } from "react";
import { componentList } from "@/blocks/data";
import { AnimatePresence, motion } from "framer-motion";
import { useCtx } from "@/components/state-provider";


export default function Category({ params }:{ params: { category:string, component: string; }}) {
  const { ctx } = useCtx()
  console.log('category params:', params)
  const { Component, code } = componentList[params.category].components?.[params.component]
  // const Comp = componentList[params.category].components?.[params.component]?.Component
  console.log('component:', Component)


  if(!Component || !code) return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">No Component found at {Object.values(params).join('/')}</h1>
    </main>
  )

  return (
    <>
      <AnimatePresence>
        {ctx.codeOpen 
          ? <motion.pre
            className="text-monospace"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {code}
          </motion.pre>
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

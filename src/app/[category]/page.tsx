import { componentList } from "@/blocks/data";
import Image from "next/image";
import Link from "next/link";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return Object.entries(componentList).map(([category, comp]) => ({
    category,
  }))
}

export default function Category({ params }:{ params: { category:string }}) {
  const cat = componentList[params.category]

  if(!cat?.name) return (
    <>
      <p className="text-xl">No category found...</p>
    </>
  )
  return (
    <>
      <h1 className="text-2xl">{cat.name}</h1>
      {Object.entries(cat.components).map(([slug, comp]) => <Link key={slug} href={`/${params.category}/${slug}`}>{comp.name}</Link>)}
    </>
  );
}

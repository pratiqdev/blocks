import { componentList } from "@/blocks/data";


export default function Category({ params }:{ params: { category:string, component: string; }}) {
  console.log('category params:', params)
  const Comp = componentList[params.category].components?.[params.component]?.Component
  console.log('component:', Comp)

  if(!Comp) return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">No Component found at {Object.values(params).join('/')}</h1>
    </main>
  )

  return (
    <>
      <h1 className="text-2xl">component:</h1>
      <Comp />
    </>
  );
}

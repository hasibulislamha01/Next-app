import { Navbar } from "@/components/SharedComponents/Navbar/Navbar"
import { Button } from "@/components/ui/button";
import { AiFillApple } from "react-icons/ai";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetBrains = JetBrains_Mono({subsets: ['latin']})
const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar/>

      <h1 className="mt-12 text-center mb-5 font-semibold">shad cn ui button variants</h1>
      <section className="flex items-center gap-5 justify-center">
        <Button variant={"default"}>default</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
      </section>

      <h1 className="mt-12 text-center mb-5 font-semibold">shad cn ui button sizes</h1>
      <section className="flex items-center gap-5 justify-center">
        <Button size={"default"}>default</Button>
        <Button size={"icon"}><AiFillApple /></Button>
        <Button size={"lg"}>large</Button>
        <Button size={"sm"}>Small</Button>
      </section>
    </main>
  );
}

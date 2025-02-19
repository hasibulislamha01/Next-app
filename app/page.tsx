import { Navbar } from "@/components/SharedComponents/Navbar/Navbar"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="w-full"><Navbar/></section>
      <h1>Hello Next js </h1>
      <Button>Hellow ShadCn Button</Button>
    </main>
  );
}

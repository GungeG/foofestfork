import Button from "./components/Button";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import { getBands } from "@/app/lib/api";
import Lineup from "./components/Lineup";

export default async function Home() {
  const bands = await getBands();
  return (
    <div>
      <Hero />
      <div className="flex space-x-10 md:space-x-40 justify-center mt-12">
        <Button text="Program" link="lineup" alt="Link to lineup"/>
        <Button text="Tickets" link="tickets" alt="Link to tickets"/>
        <Button text="Volunteer" link="" />
      </div>
      <h2 className="text-center text-8xl mt-12 font-Gambetta font-thin">
        Line-up
      </h2>
      <Lineup bands={bands} key={bands.slug} />
      <Accordion />
    </div>
  );
}

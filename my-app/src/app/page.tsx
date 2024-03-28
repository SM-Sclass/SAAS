import Image from "next/image";
import Header from '@/components/Header'
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Divide } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import {products} from "@/lib/constants";
import { HeroParallax } from "@/components/connect-parallax";
import { LampComponent } from "@/components/lamp";
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind ",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center ">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient (125%_125%_at_50%_10% , #000_35% , #223_100%)]">
        </div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll titleComponent={
            <div className="flex items-center flex-col"><Button
              size={'lg'}
              className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                Start For Free Today
              </span>
            </Button>
            <h3 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Automate Your Work With Fuzzie
              </h3></div>} >
          </ContainerScroll>
        </div>
      </section>
      <InfiniteMovingCards className="md:mt-[18rem] mt-[-100px]"
        items= {testimonials}
        direction="right"
        speed="normal"
      />
      <section>
        <HeroParallax products = {products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent/>
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">

        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Arrow from "./components/Arrow";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import TriviaGame from "./components/TriviaGame";

export default function Home() {
  return (
    <div className="bg-[url(/assets/rm456-004.jpg)] bg-cover min-h-screen text-[#d1a8da] bg-fixed">
      <Hero/>
      <About/>
      <Projects/>
      <TriviaGame/>
    </div>
  );
}

import Image from "next/image";
import Arrow from "./components/Arrow";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import TriviaGame from "./components/TriviaGame";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <div className="bg-[url(/assets/rm456-004.jpg)] bg-cover min-h-screen text-[#d1a8da] bg-fixed text-shadow-xs text-shadow-[#4f1254]">
     <Hero/>
     <About/>
     <Projects/>
     <div className="hidden min-[1100]:block mb-10"><TriviaGame/></div>
     <div className="hidden min-[850]:block mb-10"><Resume/></div>
     <Contact/>
    </div>
  );
}

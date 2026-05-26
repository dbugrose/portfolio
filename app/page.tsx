import Image from "next/image";
import Arrow from "./components/Arrow";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import TriviaGame from "./components/TriviaGame";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Proficiencies from "./components/Proficiencies";

export default function Home() {
  return (
    <div className="bg-[url(/assets/rm456-004.jpg)] bg-cover min-h-screen text-[#a767b5] bg-fixed">
     <Hero/>
     <section id="about" className="mt-5"><About/></section>
      <section id="proficiencies" className="mt-5"><Proficiencies/></section>
     <section id="projects" className="mt-5"><Projects/></section>
     <section id="trivia" className="mt-5"><div className="hidden min-[1100]:block mb-10"><TriviaGame/></div></section>
     <section id="resume" className="mt-5"><div className="hidden min-[850]:block mb-10"><Resume/></div></section>
     <section id="contact" className="mt-5"><Contact/></section>
    </div>
  );
}

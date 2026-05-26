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
     <section id="about" className="pt-20"><About/></section>
      <section id="proficiencies" className="pt-20"><Proficiencies/></section>
     <section id="projects" className="pt-20"><Projects/></section>
     <section id="trivia" className="pt-20"><div className="hidden min-[1100]:block mb-10"><TriviaGame/></div></section>
     <section id="resume" className="pt-20"><div className="hidden min-[850]:block mb-10"><Resume/></div></section>
     <section id="contact" className="pt-20"><Contact/></section>
    </div>
  );
}

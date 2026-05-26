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
    <div  id="section1" className="bg-[url(/assets/rm456-004.jpg)] bg-cover min-h-screen text-[#a767b5] bg-fixed">
     <Hero/>
     <section id="about"><About/></section>
     <section id="proficiencies"><Proficiencies/></section>
     <section id="projects"><Projects/></section>
     <section id="trivia"><TriviaGame/></section>
     <section id="resume"><Resume/></section>
     <section id="contact"><Contact/></section>
    </div>
  );
}

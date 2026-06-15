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
    <div  id="section1" className="bg-[url(/assets/rm456-004.jpg)] bg-cover min-h-screen text-[#a767b5] bg-fixed overflow-x-hidden">
     <Hero/>    
      <img src="/assets/divider.png" alt="divider" className="flex place-self-center"></img>
     <section id="about"><About/></section>
     <img src="/assets/divider.png" alt="divider" className="flex place-self-center"></img>
     <section id="proficiencies"><Proficiencies/></section>
          <img src="/assets/divider.png" alt="divider" className="flex place-self-center"></img>

     <section id="projects"><Projects/></section>
          <img src="/assets/divider.png" alt="divider" className="flex place-self-center"></img>

     <section id="trivia" className="max-[850px]:hidden"><TriviaGame/></section>
          <img src="/assets/divider.png" alt="divider" className="flex place-self-center max-[850px]:hidden"></img>

     <section id="resume" className="max-[850px]:hidden"><Resume/></section>
          <img src="/assets/divider.png" alt="divider" className="flex place-self-center max-[850px]:hidden"></img>

     <section id="contact"><Contact/></section>

    </div>
  );
}

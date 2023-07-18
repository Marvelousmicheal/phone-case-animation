import Hero from "./components/Hero/Hero";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
gsap.registerPlugin(ScrollTrigger)
  },[])
  return (
    <>
      <Hero />
    </>
  );
}

export default App;

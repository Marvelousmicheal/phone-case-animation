import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.6, delay: 0.2 }
    );
  }, []);
  return (
    <div className="hero-text-section">
      <h1 id="hero-text">
        stories meet our best friends and wildest audience ever
      </h1>
    </div>
  );
}

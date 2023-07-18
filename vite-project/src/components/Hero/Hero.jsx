import React from "react";
import HeroHeader from "./HeroHeader";
import HeroCollege from "./HeroCollege";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedby from "./HeroUsedby";
import HeroFooter from "./HeroFooter";
import "./style.css";

export default function Hero() {
  return (
    <div>
      <div className="hero-container">
        <HeroHeader />
        <div className="hero-media">
          <HeroCollege />
          <HeroPhoneBlock />
        </div>
        <HeroUsedby />
        <HeroFooter />
      </div>
    </div>
  );
}

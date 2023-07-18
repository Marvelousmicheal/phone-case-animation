import React from "react";
import { photos, videos } from "../../data";
import { gsap } from "gsap";
import { useEffect } from "react";
function VideoElement({ src }) {
  return (
    <div className="hero-element">
      <video
        className="college-element"
        playsInline=""
        autoPlay
        loop
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}

export default function HeroCollege() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.2,
    });
    tl.fromTo(
      ".hero-element",
      {
        y: 300,
      },
      { y: 0, duration: 1, stagger: 0.5 }
    );
  }, []);
  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((src) => (
          <ImageElement src={src} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
}

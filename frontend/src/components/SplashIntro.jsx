import { useEffect, useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import "./SplashIntro.css";

export const SplashIntro = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(onFinish, 3600);
        return () => clearTimeout(timer);
    }, [onFinish]);

   return (
  <div className="splash-intro">
    <div
      className="splash-bg"
      style={{ backgroundImage: `url(${hairBlesserOfficial})` }}
    />

    <div className="dark-vignette" />

    <div className="magical-text">
      Welcome to Hair Blesser
      <span className="light-sweep" />
    </div>

    <div className="dust dust-slow" />
    <div className="dust dust-medium" />
    <div className="dust dust-fast" />

    <div className="light-orbs" />
  </div>
);
};

export default SplashIntro;
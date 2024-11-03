"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import { Clouds } from "./ui/Clouds";

export const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};

"use client";

import HomeBanner from "@/app/components/HomeBanner";
import About from "@/app/components/About";
import Service from "@/app/components/Service";

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <About/>
      <Service/>
    </>
  );
}
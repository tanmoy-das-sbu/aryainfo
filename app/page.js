'use client'

import { Service } from "@/components/component/Service";
import { Footer } from "@/components/component/footer";
import { HeroSection } from "@/components/component/hero-section";
import { Navbar } from "@/components/component/navbar";
import { WhatWeOffer } from "@/components/component/what-we-offer";

export default function Home() {
  return (
    
    <div>
     <Navbar/>
     <HeroSection/>
     <WhatWeOffer/>
     <Service/>
     <Footer/>
    </div>
  );
}

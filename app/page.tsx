import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitleComponent from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import heroData from "@/components/Hero/heroData";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import videoData from "@/components/Video/videoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATech Web Agency",
  description:
    "Our specialized website design and development services are tailored to enhance your professional image and stimulate increased business growth.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero {...heroData} />
      <SectionTitleComponent
        title="Main Features"
        paragraph="Unleash success with our comprehensive web solutions. Craft unique digital identities, excel in SEO, e-commerce, and user-friendly interfaces. Empower yourself with easy content management, scalability, and robust security. Gain insights with analytics integration. Embark on an innovative journey, making your online presence a powerful asset for business success."
        align="text-center"
        width="100%"
      />
      <Features />
      <Video {...videoData}/>
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

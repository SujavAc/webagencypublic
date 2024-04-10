import About from "@/components/About";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | A-Tech Web Agency",
  description:
    "Welcome to A-Tech Web Agency, where innovation meets excellence. We specialize in crafting bespoke digital solutions that elevate your online presence. Our dynamic team combines creativity and technical prowess to deliver cutting-edge websites and applications. From concept to execution, we're dedicated to bringing your vision to life. Join us in the journey towards digital success.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to A-Tech Web Agency, where innovation meets excellence. We specialize in crafting bespoke digital solutions that elevate your online presence. Our dynamic team combines creativity and technical prowess to deliver cutting-edge websites and applications. From concept to execution, we're dedicated to bringing your vision to life. Join us in the journey towards digital success."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <About />
    </>
  );
};

export default AboutPage;

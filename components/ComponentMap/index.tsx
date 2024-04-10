import React from "react";
import Hero from "../Hero";
import SectionTitleComponent from "../Common/SectionTitle";
import Features from "../Features";

// Define your components
const ComponentMap: { [key: string]: React.ComponentType<any> } = {
  sectionTitle: SectionTitleComponent,
  heroBanner: Hero,
  features: Features,
};

export default ComponentMap;

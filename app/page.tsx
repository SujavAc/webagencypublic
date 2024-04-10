import { Metadata } from "next";
import Page from '../dynamicRoute/page';

export const metadata: Metadata = {
  title: "ATech Web Agency",
  description:
    "Our specialized website design and development services are tailored to enhance your professional image and stimulate increased business growth.",
  // other metadata
};

export default function Home() {
  return (
    <Page />
  );
}

import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashboard from "@/dashboard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | A-Tech Web Agency",
  description:
    "Welcome to A-Tech Web Agency, where innovation meets excellence. We specialize in crafting bespoke digital solutions that elevate your online presence. Our dynamic team combines creativity and technical prowess to deliver cutting-edge websites and applications. From concept to execution, we're dedicated to bringing your vision to life. Join us in the journey towards digital success.",
  // other metadata
};

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb pageName="Admin Page" description="Manage your website" />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | A-Tech Web Agency",
  description: "At A-Tech Web Agency, we're here to turn your ideas into powerful digital solutions. Whether you have questions, need a consultation, or are ready to embark on a transformative journey, our team is ready to assist you. Reach out to us for expert guidance, personalized solutions, and unparalleled support. Your success is our priority, and we look forward to collaborating with you on your next digital venture. Contact us today to start your journey towards online brilliance.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="At A-Tech Web Agency, we're here to turn your ideas into powerful digital solutions. Whether you have questions, need a consultation, or are ready to embark on a transformative journey, our team is ready to assist you. Reach out to us for expert guidance, personalized solutions, and unparalleled support. Your success is our priority, and we look forward to collaborating with you on your next digital venture. Contact us today to start your journey towards online brilliance."
      />
      <Contact />
    </>
  );
};

export default ContactPage;

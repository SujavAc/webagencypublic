"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { SendEmail } from "@/email/sendEmail";
import { EmailData } from "@/types/email";
import addDocument from "@/database/operation/action";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const clearContactdata = () => {
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const onChange = (key: any, e: any) => {
    if (!key) {
      return;
    }
    const data = {
      ...contactData,
      [key]: e.target.value,
    };
    setContactData(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = contactData;
    if (name && email && message) {
      const emailData: EmailData = {
        recipientEmail: contactData.email,
        recipientName: contactData.name,
        subject: "Thank You for Contacting A-Tech Web Agency",
        note: "Please Note: This is an automated email",
        greeting: `Dear ${contactData.name},`,
        body: {
          introText: `I hope this email finds you well. Thank you for reaching out to us through our website's contact form. We appreciate the opportunity to assist you.`,
          paragraph1: `We have received your inquiry, and our team is already working on addressing your concerns. We understand that your time is valuable, and we want to assure you that we are committed to providing you with the best possible assistance.`,
          paragraph2: `Here's a summary of your inquiry: [${contactData.message}]`,
          paragraph3:
            "Our team is dedicated to resolving this matter promptly, and we will get back to you with a detailed response as soon as possible. In the meantime, if you have any additional information or specific details you'd like to share, please feel free to reply to this email.",
          paragraph4:
            "If your inquiry is urgent or requires immediate attention, you can reach us directly at 0493696251 during our business hours.",
          paragraph5:
            "Once again, thank you for choosing A-Tech Web Agency. We appreciate your trust in our services, and we look forward to providing you with a resolution that exceeds your expectations.",
          conclusion: "",
        },
        emailSignature: {
          title: "Best Regards,",
          websiteUrl: window.location.origin,
          name: "Customer Service",
          department: "",
          phone: "0493696251",
          email: "a.techaccess@gmail.com",
          location: "",
          image: "",
        },
      };

      const res = await SendEmail(emailData);
      if (res.status === 200) {
        const { result, error } = await addDocument("contactus", contactData);
        if (result) {
          clearContactdata();
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={contactData?.name}
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => onChange("name", e)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={contactData?.email}
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => onChange("email", e)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={contactData?.message}
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => onChange("message", e)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap gap-4 px-4">
                    <button
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                    >
                      {loading ? "Submitting..." : "Submit Ticket"}
                    </button>
                    <button
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={(e) => {
                        e.preventDefault();
                        clearContactdata();
                      }}
                      disabled={loading}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

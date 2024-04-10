import emailjs from "@emailjs/browser";

export const SendEmail = (userData) => {
  if (!userData) {
    return;
  } else {
    return emailjs.send(
      "service_5ukh224",
      "template_vxx4nxt",
      userData,
      "WbUo9eg7AJH065IRq",
    );
  }
};

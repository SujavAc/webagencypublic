export type EmailData = {
  recipientName: string;
  recipientEmail: string;
  subject: string,
  note: string,
  greeting: string,
  body: Body,
  emailSignature: EmailSignature,
};

type EmailSignature = {
  title: string,
  websiteUrl: string;
  name: string;
  department: string;
  phone: string;
  email: string;
  location: string;
  image: string;
};

type Body = {
  introText: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
  conclusion: string;
};
export const CookieConsentConfig = {
  id: { type: "text" },
  dialogTitle: { type: "text" },
  dialogContent: { type: "textarea" },
  animationType: {
    type: "select",
    options: [
      { label: "Slide Up", value: "TransitionUp" },
      { label: "Slide Down", value: "TransitionDown" },
      { label: "Slide Left", value: "TransitionLeft" },
      { label: "Slide Right", value: "TransitionRight" },
    ],
  },
};

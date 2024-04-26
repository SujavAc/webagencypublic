export const SocialShareConfig = {
  platform: {
    type: "select",
    options: [
      { label: "Facebook", value: "FacebookShareButton" },
      { label: "VK", value: "VKShareButton" },
      { label: "Twitter", value: "TwitterShareButton" },
      { label: "Telegram", value: "TelegramShareButton" },
      { label: "Pocket", value: "PocketShareButton" },
      { label: "Reddit", value: "RedditShareButton" },
      { label: "LinkedIn", value: "LinkedinShareButton" },
      { label: "Pinterest", value: "PinterestShareButton" },
      { label: "WhatsApp", value: "WhatsappShareButton" },
      { label: "Tumblr", value: "TumblrShareButton" },
      { label: "Email", value: "EmailShareButton" },
      { label: "Viber", value: "ViberShareButton" },
      { label: "Messenger", value: "FacebookMessengerShareButton" },
      { label: "Gab", value: "GabShareButton" },
      { label: "Line", value: "LineShareButton" },
      { label: "Weibo", value: "WeiboShareButton" },
      { label: "Hatena", value: "HatenaShareButton" },
      { label: "Main Ru", value: "MailruShareButton" },
      { label: "WorkPlace", value: "WorkplaceShareButton" },
      { label: "Insta Paper", value: "InstapaperShareButton" },
      { label: "Live Journal", value: "LivejournalShareButton" },
    ],
  },
  enableShareCount: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  customIcon: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  socialPlatformIconProps: {
    type: "object",
    objectFields: {
      round: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      size: { type: "number" },
    },
  },
  socialPlatformDataProps: {
    type: "object",
    objectFields: {
      url: { type: "text" },
      title: { type: "text" },
      description: { type: "text" },
      quote: { type: "text" },
      hastag: { type: "text" },
      subject: { type: "text" },
      body: { type: "text" },
      media: { type: "text" },
      image: { type: "text" },
      separator: { type: "text" },
      appId: { type: "text" },
    },
  },
};

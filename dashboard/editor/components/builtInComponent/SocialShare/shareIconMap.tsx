import {
  GabIcon,
  LineIcon,
  EmailIcon,
  ViberIcon,
  WeiboIcon,
  HatenaIcon,
  MailruIcon,
  PocketIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  PinterestIcon,
  WorkplaceIcon,
  InstapaperIcon,
  LivejournalIcon,
  FacebookMessengerIcon,
} from "next-share";

export interface SocialShareIconMapProps {
  platformButton: string;
}

export const SocialShareIconMap = (props: SocialShareIconMapProps) => {
  const { platformButton, ...rest } = props;
  let ComponentButton = null;

  // Check the platformButton prop to determine which component to render
  switch (platformButton) {
    case "EmailShareButton":
      ComponentButton = EmailIcon;
      break;
    case "FacebookMessengerShareButton":
      ComponentButton = FacebookMessengerIcon;
      break;
    case "FacebookShareButton":
      ComponentButton = FacebookIcon;
      break;
    case "GabShareButton":
      ComponentButton = GabIcon;
      break;
    case "HatenaShareButton":
      ComponentButton = HatenaIcon;
      break;
    case "InstapaperShareButton":
      ComponentButton = InstapaperIcon;
      break;
    case "LineShareButton":
      ComponentButton = LineIcon;
      break;
    case "LinkedinShareButton":
      ComponentButton = LinkedinIcon;
      break;
    case "LivejournalShareButton":
      ComponentButton = LivejournalIcon;
      break;
    case "MailruShareButton":
      ComponentButton = MailruIcon;
      break;
    case "PocketShareButton":
      ComponentButton = PocketIcon;
      break;
    case "RedditShareButton":
      ComponentButton = RedditIcon;
      break;
    case "TelegramShareButton":
      ComponentButton = TelegramIcon;
      break;
    case "TwitterShareButton":
      ComponentButton = TwitterIcon;
      break;
    case "VKShareButton":
      ComponentButton = null;
      break;
    case "ViberShareButton":
      ComponentButton = ViberIcon;
      break;
    case "WhatsappShareButton":
      ComponentButton = WhatsappIcon;
      break;
    case "WeiboShareButton":
      ComponentButton = WeiboIcon;
      break;
    case "WorkplaceShareButton":
      ComponentButton = WorkplaceIcon;
      break;
    // Add cases for other platforms if needed
    case "PinterestShareButton":
      ComponentButton = PinterestIcon;
      break;
    case "TumblrShareButton":
      ComponentButton = TumblrIcon;
      break;
    default:
      ComponentButton = null;
  }

  return ComponentButton && <ComponentButton {...rest} />;
};

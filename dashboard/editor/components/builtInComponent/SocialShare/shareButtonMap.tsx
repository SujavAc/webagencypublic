import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  ViberShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  VKShareButton,
  GabShareButton,
  LineShareButton,
  WeiboShareButton,
  HatenaShareButton,
  MailruShareButton,
  PocketShareButton,
  RedditShareButton,
  LinkedinShareButton,
  WorkplaceShareButton,
  InstapaperShareButton,
  LivejournalShareButton,
  PinterestShareButton,
  TumblrShareButton,
} from "next-share";

export interface SocialShareButtonMapProps {
  platformButton: string;
}

export const SocialShareButtonMap = (props: SocialShareButtonMapProps) => {
  const { platformButton } = props;
  let ComponentButton = null;

  // Check the platformButton prop to determine which component to render
  switch (platformButton) {
    case "EmailShareButton":
      ComponentButton = EmailShareButton;
      break;
    case "FacebookMessengerShareButton":
      ComponentButton = FacebookMessengerShareButton;
      break;
    case "FacebookShareButton":
      ComponentButton = FacebookShareButton;
      break;
    case "GabShareButton":
      ComponentButton = GabShareButton;
      break;
    case "HatenaShareButton":
      ComponentButton = HatenaShareButton;
      break;
    case "InstapaperShareButton":
      ComponentButton = InstapaperShareButton;
      break;
    case "LineShareButton":
      ComponentButton = LineShareButton;
      break;
    case "LinkedinShareButton":
      ComponentButton = LinkedinShareButton;
      break;
    case "LivejournalShareButton":
      ComponentButton = LivejournalShareButton;
      break;
    case "MailruShareButton":
      ComponentButton = MailruShareButton;
      break;
    case "PocketShareButton":
      ComponentButton = PocketShareButton;
      break;
    case "RedditShareButton":
      ComponentButton = RedditShareButton;
      break;
    case "TelegramShareButton":
      ComponentButton = TelegramShareButton;
      break;
    case "TwitterShareButton":
      ComponentButton = TwitterShareButton;
      break;
    case "VKShareButton":
      ComponentButton = VKShareButton;
      break;
    case "ViberShareButton":
      ComponentButton = ViberShareButton;
      break;
    case "WhatsappShareButton":
      ComponentButton = WhatsappShareButton;
      break;
    case "WeiboShareButton":
      ComponentButton = WeiboShareButton;
      break;
    case "WorkplaceShareButton":
      ComponentButton = WorkplaceShareButton;
      break;
    // Add cases for other platforms if needed
    case "PinterestShareButton":
      ComponentButton = PinterestShareButton;
      break;
    case "TumblrShareButton":
      ComponentButton = TumblrShareButton;
      break;
    default:
      ComponentButton = null;
  }

  return ComponentButton;
};

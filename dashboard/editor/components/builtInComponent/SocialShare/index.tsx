import { DropZone } from "@measured/puck";
import { SocialShareButtonMap } from "./shareButtonMap";
import { SocialShareIconMap } from "./shareIconMap";
import { SocialShareCountMap } from "./shareCountMap";

export interface SocialShareProps {
  platform: string;
  enableShareCount?: boolean;
  customIcon?: boolean;
  socialPlatformDataProps: SocialShareDataProps;
  socialPlatformIconProps?: SocialShareIconProps;
}

interface SocialShareDataProps {
  url: string;
  title?: string;
  description?: string;
  //   subject and body for email
  subject?: string;
  body?: string;
  //   quote for facebook and workplace
  quote?: string;
  hashtag?: string;
  //   media for pinterest
  media?: string;
  //   image for vk share and webio
  image?: string;
  //   separator for whatsapp
  separator?: string;
  //   appid for facebook share
  appId?: string;
}
interface SocialShareIconProps {
  size?: number;
  round?: boolean;
}

export const SocialShareData = [
  {
    platform: "FacebookShareButton",
    enableShareCount: true,
    customIcon: false,
    icon: "FacebookIcon",
  },
];

export const SocialShare = (props: SocialShareProps) => {
  const {
    platform,
    customIcon,
    enableShareCount,
    socialPlatformDataProps,
    socialPlatformIconProps,
  } = props;
  const Button = SocialShareButtonMap({ platformButton: platform });
  return (
    Button && (
      <Button {...socialPlatformDataProps}>
        {customIcon ? (
          <DropZone zone={`Share Zone wrapper`} style={{ width: "200px" }} />
        ) : (
          SocialShareIconMap({
            platformButton: platform,
            ...socialPlatformIconProps,
          })
        )}
        {enableShareCount &&
          SocialShareCountMap({
            platformCount: platform,
            url: socialPlatformDataProps?.url,
          })}
      </Button>
    )
  );
};

import {
  FacebookShareCount,
  PinterestShareCount,
  TumblrShareCount,
  VKShareCount,
  HatenaShareCount,
} from "next-share";

export interface SocialShareProps {
  platformCount: string;
  url: string;
}

export const SocialShareCountMap = (props: SocialShareProps) => {
  const { platformCount, ...rest } = props;
  let ComponentShareCount = null;

  // Check the platformCount prop to determine which component to render
  switch (platformCount) {
    case "FacebookShareButton":
      ComponentShareCount = FacebookShareCount;
      break;
    // Add cases for other platforms if needed
    case "PinterestShareButton":
      ComponentShareCount = PinterestShareCount;
      break;
    case "TumblrShareButton":
      ComponentShareCount = TumblrShareCount;
      break;
    // Add cases for other platforms if needed
    case "VKShareButton":
      ComponentShareCount = VKShareCount;
      break;
    case "HatenaShareButton":
      ComponentShareCount = HatenaShareCount;
      break;
    default:
      ComponentShareCount = null;
  }

  return (
    <ComponentShareCount {...rest}>
      {(shareCount) => <span className="wrapper">{shareCount}</span>}
    </ComponentShareCount>
  );
};

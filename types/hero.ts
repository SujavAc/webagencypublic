import { Link } from "@/types/Link";

export type HeroType = {
  id: string;
  title: string;
  description: string;
  path: string;
  buttons: Link[];
  rightTopSvg: string;
  bottomLeftSvg: string;
};
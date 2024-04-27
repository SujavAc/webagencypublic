import { Link } from "@/types/Link";

export type Hero = {
  id: string;
  title: string;
  description: string;
  path: string;
  buttons: Link[];
  rightTopSvg: string;
  bottomLeftSvg: string;
};
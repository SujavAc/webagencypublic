import { Link } from "@/types/Link";

export type Hero = {
  id: number;
  title: string;
  description: string;
  path: string;
  buttons: Link[];
  rightTopSvg: string;
  bottomLeftSvg: string;
};
import { SectionTitleProps } from "@/types/sectionTitleProps";
import { LinksProps } from "../../navigation/link";

export interface MapData {
  name?: string;
  latLng?: google.maps.LatLngLiteral;
  icon?: string;
}

export interface MapProps {
  height: number;
  value?: MapData;
  zoomLevel?: number;
  openInfoBox?: boolean;
  sectionTitleProps?: SectionTitleProps;
  linkOnInfoBox?: LinksProps;
}

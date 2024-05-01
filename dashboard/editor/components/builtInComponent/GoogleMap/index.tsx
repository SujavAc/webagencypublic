import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapData, MapProps } from "./Map.model";
import dynamic from "next/dynamic";
import SectionTitleComponent from "../sectionTitle";
import PaperWrapper from "../../common/Layout/Paper/index";
import Links from "../../navigation/link";

const InfoBoxComponent = dynamic(() => import("./mapInfoBox"));

type LatLng = google.maps.LatLngLiteral;

export default function Map(props: MapProps) {
  const {
    id,
    height,
    value,
    zoomLevel,
    openInfoBox,
    sectionTitleProps,
    linkOnInfoBox,
  } = props;
  // for initial Value
  const [valueData, setValueData] = useState<MapData>(value);
  const [infoBox, setInfoBox] = useState<boolean>(openInfoBox || true);

  const center = useMemo<LatLng>(
    () =>
      valueData?.latLng || valueData?.latLng || { lat: -24.345, lng: 134.46 },
    [valueData],
  );

  useEffect(() => {
    if (!value || !value?.latLng) {
      setValueData({});
      return;
    }
    if (value && value?.latLng) {
      return setValueData(value);
    }
  }, [value]);

  const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };

  return (
    <div className="map" id={id}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{
            height: `${height}px` || "400px",
            width: "100%",
          }}
          zoom={zoomLevel || 17}
          center={center}
        >
          {valueData && valueData?.latLng && (
            <Marker position={center} onClick={() => setInfoBox(!infoBox)} />
          )}
          {infoBox && valueData && valueData.latLng && (
            <InfoBoxComponent
              options={infoBoxOptions}
              position={center}
              onCloseClick={() => setInfoBox(false)}
            >
              <PaperWrapper>
                <SectionTitleComponent {...sectionTitleProps} />
                <Links {...linkOnInfoBox} />
              </PaperWrapper>
            </InfoBoxComponent>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export const googleMapConfig = {
  value: {
    type: "object",
    objectFields: {
      latLng: {
        type: "object",
        objectFields: {
          lat: { type: "number" },
          lng: { type: "number" },
        },
      },
    },
  },
  height: { type: "number" },
  zoomLevel: { type: "number" },
  openInfoBox: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
};

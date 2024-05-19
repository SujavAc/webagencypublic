import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import Image, { ImageProps } from "next/image";
import MasonryGrid from "@/dashboard/editor/components/builtInComponent/masonrygrid";

interface ImageGalleryProps {
  title?: string;
  images?: IImagesProps[];
  actionButtons?: (image: ImageProps) => ReactElement;
}

export interface IImagesProps extends ImageProps {
  file?: any;
}

const ImageGallery = (props: ImageGalleryProps) => {
  const { title, images, actionButtons } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {title && <Typography variant="h3"> {title} </Typography>}
      <MasonryGrid columns={{ xs: 2, sm: 2, md: 3 }}>
        {images?.map((image, index) => (
          <Box key={index}>
            <Box sx={{ borderStartEndRadius: 4, borderStartStartRadius: 4 }}>
              <Image
                width={2500}
                height={2500}
                alt={image.alt}
                src={
                  image.src ||
                  "https://firebasestorage.googleapis.com/v0/b/webagency-94d1d.appspot.com/o/Organisation%20Logo%2FNo_Preview_image.png?alt=media&token=9d6b41be-2347-4ae1-b9dd-fea63d5d88cf"
                }
                {...image}
              />
            </Box>
            <Box
              sx={{
                boxShadow: 24,
                background: "transparent",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "Background",
                padding: 1,
                borderEndEndRadius: 4,
                borderEndStartRadius: 4,
                gap: 1,
                zIndex: 1,
              }}
            >
              {image.alt && (
                <Typography variant="h6" noWrap>
                  {" "}
                  {image.alt}{" "}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                  gap: 1,
                }}
              >
                {actionButtons(image)}
              </Box>
            </Box>
          </Box>
        ))}
      </MasonryGrid>
    </Box>
  );
};

export default ImageGallery;

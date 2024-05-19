import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ButtonWrapper from "@/dashboard/editor/components/common/Inputs/Button";
import Image from "next/image";
import MasonryGrid from "@/dashboard/editor/components/builtInComponent/masonrygrid";

interface UploadedImageGalleryProps {
  uploadedFile?: any[];
  handleUpdateFiles: (data: any[]) => void;
  handleDeleteFiles: (index: number) => void;
}

const UploadedImageGallery = (props: UploadedImageGalleryProps) => {
  const { uploadedFile, handleUpdateFiles, handleDeleteFiles } = props;
  const [images, setImages] = useState([]);

  const handleDelete = (index: number) => {
    handleDeleteFiles(index);
  };

  useEffect(() => {
    if (uploadedFile && uploadedFile?.length > 0) {
      let imagesUrls = [];
      for (var i = 0; i < uploadedFile.length; i++) {
        var file = uploadedFile[i];
        const image = { url: URL.createObjectURL(file), name: file?.name };
        imagesUrls.push(image);
      }
      return setImages(imagesUrls);
    }
    return setImages([]);
  }, [uploadedFile]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MasonryGrid columns={4}>
        {images.map((image, index) => (
          <Box sx={{ position: "relative" }} key={index}>
            <Image src={image.url} alt={image.name} width={2500} height={100} />
            <ButtonWrapper
              aria-label="delete"
              onClick={() => handleDelete(index)}
              startIcon="Delete"
              color="error"
              iconButton
              sx={{
                position: "absolute",
                top: 1,
                right: 1,
                boxShadow: 24,
              }}
            />
          </Box>
        ))}
      </MasonryGrid>
    </Box>
  );
};

export default UploadedImageGallery;

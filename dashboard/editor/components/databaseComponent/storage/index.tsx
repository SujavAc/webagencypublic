import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import ButtonWrapper from "../../common/Inputs/Button";
import { connect } from "react-redux";
import {
  AddFirebaseStorage,
  DeleteFirebaseStorageFile,
  getDownloadURL,
  getStorageFile,
} from "@/store/action/storage/firebaseStorageAction";
import { StorageReference } from "firebase/storage";
import { useAppSelector } from "@/store/hook";
import CopyTextComponent from "../../builtInComponent/Copy";
import ImageGallery, {
  IImagesProps,
} from "../../builtInComponent/imageGallery";
import { Box, Typography } from "@mui/material";
import FormBuilder from "../../table/commonFormBuilder";
import CommonTooltip from "../../common/dataDisplay/tooltip";

interface IFileList {
  addAddFirebaseStorageData?: (path: string, image: any, metadata: any) => void;
  DeleteFirebaseStorageFile?: (reference: StorageReference) => void;
  getStorageFile?: (
    reference: string,
    itemsPerPage: number,
    nextPageToken?: string
  ) => void;
  getDownloadURL?: (reference: StorageReference) => void;
  id?: string;
  storagePath: string;
  title: string;
  itemsPerPage: number;
  isGalleryView?: boolean;
  allowFileUpload?: boolean;
}
const FilesList = ({
  addAddFirebaseStorageData,
  DeleteFirebaseStorageFile,
  getStorageFile,
  getDownloadURL,
  title,
  storagePath,
  itemsPerPage,
  isGalleryView = false,
  allowFileUpload = false,
}: IFileList) => {
  const { enqueueSnackbar } = useSnackbar();

  const allStorageData = useAppSelector((state) => state.storageData);

  // const { storageFiles, nextPageToken, storageFileUrls } =
  //   Object.keys(allStorageData).length > 0 && allStorageData[storagePath];
  const {
    storageFiles = [],
    nextPageToken = null,
    storageFileUrls = {},
    loading = true,
  } = (allStorageData && allStorageData[storagePath]) || {};
  const storageFilesExist = storageFiles && storageFiles?.length > 0;

  useEffect(() => {
    const getFiles = async () => {
      try {
        // Fetch files from Firebase Storage
        await getStorageFile(storagePath, itemsPerPage);
        return enqueueSnackbar({
          message: "File loaded successfully",
          variant: "success",
        });
      } catch (error) {
        console.error("error", error);
      }
    };

    if (!storageFilesExist && storagePath) {
      getFiles();
    }
  }, [storageFilesExist, getStorageFile, itemsPerPage, storagePath]);

  const loadMoreFiles = async () => {
    if (nextPageToken && storagePath) {
      await getStorageFile(storagePath, itemsPerPage, nextPageToken);
      return enqueueSnackbar({
        message: "File loaded successfully",
        variant: "success",
      });
    }
  };

  const handleClick = async (file: any) => {
    try {
      // Get download URL for the file
      await getDownloadURL(file);
      enqueueSnackbar({
        message: "Success getting download url",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: "Error getting download URL:",
        variant: "error",
      });
    }
  };

  // const handleFileUpload = async (data: any) => {
  //   if (data?.files && data?.files?.length > 0) {
  //     const file = data?.files[0];
  //     const imageName = file?.name;
  //     const metadata = {
  //       contentType: file?.type,
  //       name: imageName,
  //       size: file?.size,
  //     };
  //     try {
  //       await addAddFirebaseStorageData(storagePath, file, metadata);
  //       return { error: false, success: true };
  //     } catch (error) {
  //       enqueueSnackbar({
  //         message: "Error uploading file:",
  //         variant: "error",
  //       });
  //       return { error: true, success: false };
  //     }
  //   }
  // };

  const handleMultipleFileUpload = async (data: any) => {
    if (data?.files && data?.files?.length > 0) {
      const file = data?.files;
      let success = false;
      let error = true;
      for (var i = 0; i < file.length; i++) {
        var eachfile = file[i];
        const imageName = eachfile?.name;
        const metadata = {
          contentType: eachfile?.type,
          name: imageName,
          size: eachfile?.size,
        };
        try {
          await addAddFirebaseStorageData(storagePath, eachfile, metadata);
          success = true;
          error = false;
        } catch (error) {
          enqueueSnackbar({
            message: "Error uploading file:",
            variant: "error",
          });
          error = true;
          success = false;
        }
      }
      return { error: error, success: success };
    }
  };

  const handleFileDelete = async (file: any) => {
    try {
      await DeleteFirebaseStorageFile(file);
    } catch (error) {
      enqueueSnackbar({
        message: "Error in deleting file",
        variant: "error",
      });
      console.error("Error deleting file:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}
    >
      {allowFileUpload && (
        <FormBuilder
          id="Add files"
          title="Add Files into storage"
          formData={[
            {
              name: "files",
              helperText: "Choose image",
              type: "fileupload",
              rules: {
                required: true,
              },
              fieldProps: {
                label: "Upload your image",
                variant: "outlined",
                multiple: true,
                accept: "image/png, image/jpeg",
              },
              displayImages: true,
            },
          ]}
          onSubmit={handleMultipleFileUpload}
          defaultValues={{ files: [] }}
          formFieldDirection="row"
        />
      )}
      {isGalleryView && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "-webkit-fill-available",
          }}
        >
          {storageFiles && storageFiles?.length > 0 ? (
            <ImageGallery
              title={title || "View Images"}
              images={storageFiles?.map((file: { name: string | number }) => ({
                src: storageFileUrls && storageFileUrls[file?.name],
                alt: file?.name,
                file: file,
              }))}
              actionButtons={(image: IImagesProps) => (
                <>
                  {image?.src && (
                    <CopyTextComponent
                      startIcon="ContentCopy"
                      iconButton
                      color="primary"
                      textToCopy={`${image?.src}`}
                    >
                      Copy Url
                    </CopyTextComponent>
                  )}
                  {!image?.src && (
                    <CommonTooltip title="View Image">
                      <ButtonWrapper
                        startIcon="Visibility"
                        iconButton
                        color="primary"
                        variant="outlined"
                        onClick={() => handleClick(image?.file)}
                      />
                    </CommonTooltip>
                  )}
                  <CommonTooltip title="Delete Image">
                    <ButtonWrapper
                      onClick={() => handleFileDelete(image?.file)}
                      startIcon="Delete"
                      iconButton
                      size="small"
                      color="error"
                    />
                  </CommonTooltip>
                </>
              )}
            />
          ) : (
            <Typography variant="caption"> No images found </Typography>
          )}
          <CommonTooltip title="Load more image">
            <ButtonWrapper
              variant="outlined"
              onClick={() => loadMoreFiles()}
              disabled={!nextPageToken}
            >
              Load More
            </ButtonWrapper>
          </CommonTooltip>
        </Box>
      )}
    </Box>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addAddFirebaseStorageData: (path: string, image: any, metadata: any) =>
      dispatch(AddFirebaseStorage(path, image, metadata)),
    getStorageFile: (
      reference: string,
      itemsPerPage: number,
      nextPageToken?: string
    ) => dispatch(getStorageFile(reference, itemsPerPage, nextPageToken)),
    DeleteFirebaseStorageFile: (reference: StorageReference) =>
      dispatch(DeleteFirebaseStorageFile(reference)),
    getDownloadURL: (reference: StorageReference) =>
      dispatch(getDownloadURL(reference)),
  };
};
export default connect(null, mapDispatchToProps)(FilesList);

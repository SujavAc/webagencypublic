import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  list,
  deleteObject,
  StorageReference,
  // uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../config";

export const uploadFile = async (image, uploadPath, metadata) => {
  const imageRef = storageRef(storage, `${uploadPath}`);

  if (image === null) {
    return;
  }
  // const uploadTask = uploadBytesResumable(imageRef, image, metadata);
  const snapshot = await uploadBytes(imageRef, image, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return { downloadURL, ref: snapshot?.ref };
  // let downloadURL = null;
  // let errorMessage = null;
  // let ref = null;
  // let progress = null;

  // uploadTask.on(
  //   "state_changed",
  //   (snapshot) => {
  //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //     progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log("Upload is " + progress + "% done");
  //     switch (snapshot.state) {
  //       case "paused":
  //         console.log("Upload is paused");
  //         break;
  //       case "running":
  //         console.log("Upload is running");
  //         break;
  //     }
  //   },
  //   (error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case "storage/unauthorized":
  //         // User doesn't have permission to access the object
  //         errorMessage = "You are not authorised person to upload files";
  //         break;
  //       case "storage/canceled":
  //         // User canceled the upload
  //         errorMessage = "File upload got canceled. Please try again. Thanks";
  //         break;

  //       // ...

  //       case "storage/unknown":
  //         // Unknown error occurred, inspect error.serverResponse
  //         errorMessage =
  //           "Looks like we haven't understand the storage that you are tying to upload on.";
  //         break;
  //     }
  //   },
  //   () => {
  //     // Upload completed successfully, now we can get the download URL
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       downloadURL = downloadURL;
  //       ref = uploadTask.snapshot.ref;
  //     });
  //   },
  // );
  // return { downloadURL, ref, errorMessage, progress };
};

// export const uploadMultipleFiles = async (images, uploadPath) => {

// }

export const fetchFiles = async (
  reference: string,
  itemsPerPage: number,
  nextPageToken?: string
) => {
  if (!reference || !itemsPerPage) {
    return;
  }
  try {
    const ref = storageRef(storage, reference);
    // Fetch files from Firebase Storage
    let options;
    if (nextPageToken) {
      options = {
        maxResults: itemsPerPage,
        pageToken: nextPageToken ? nextPageToken : "",
      };
    } else {
      options = {
        maxResults: itemsPerPage,
      };
    }
    const filesList = await list(ref, options);
    const nextPageTokenRef = filesList?.nextPageToken;

    return { filesList, nextPageTokenRef };
  } catch (error) {
    console.error("Error fetching files:", error);
    return { filesList: null, nextPageTokenRef: null };
  }
};

export const deleteFile = async (reference: StorageReference) => {
  return await deleteObject(reference);
};

export const getDownloadUrl = async (reference: StorageReference) => {
  return await getDownloadURL(reference);
};

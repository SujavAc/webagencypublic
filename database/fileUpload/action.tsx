import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../config";


export const uploadFile = async(image, uploadPath) => {
    const imageRef = storageRef(storage, `${uploadPath}`);
   

    if (image === null) {
      return;
    }
    const snapshot = await uploadBytes(imageRef, image);
    return getDownloadURL(snapshot.ref)
  };
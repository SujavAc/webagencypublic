import { Timestamp } from "firebase/firestore";

// Assuming dateAdded is the Firebase Timestamp object
const firebaseTimestamp = {
  nanoseconds: 836000000,
  seconds: 1711597023,
};

export const convertIntoReadable = (date: Timestamp) => {
  if (!date) {
    return;
  }

  // Convert Firebase Timestamp to JavaScript Date
  const jsDate = new Date(
    firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000
  );

  // Format the date for user readability
  const formattedDate = jsDate.toLocaleString(); // Customize as per your requirement

  return formattedDate;
};

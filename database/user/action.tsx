import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config";

const userRef = collection(db, "users");

export const getUser = async (id: string) => {
  if (!id) {
    return;
  }
  return await getDoc(doc(userRef, id));
};

export const addUser = async (userData) => {
  if (!userData) {
    return;
  }
  
  return await setDoc(doc(userRef, `${userData?.uid}`), {
    ...userData,
    createdAt: Date.now(),
  });
};

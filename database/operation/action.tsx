import {
  doc,
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config";
// add
export default async function addDocument(dbcollection: string, data: any) {
  let result = null;
  let error = null;
  const newData = {
    ...data,
    dateAdded: Timestamp.now(),
  };
  try {
    result = await addDoc(collection(db, dbcollection), newData);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

// get single doc
export const getSingleDocument = async (dbcollection: string, id: string) => {
  if (!dbcollection) {
    return;
  }
  const docRef = doc(db, dbcollection, id);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

// update
export const updateDocument = (
  dbcollection: string,
  id: string,
  updatedData: any,
) => {
  if (!id || !dbcollection) {
    return;
  }
  return updateDoc(doc(db, dbcollection, id), updatedData);
};

// delete
export const deleteDocument = (dbcollection: string, id: string) => {
  if (!id || !dbcollection) {
    return;
  }
  return deleteDoc(doc(db, dbcollection, id));
};

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../config";
import { WhereCondition, orderByCondition } from "@/types/firebase/where";

// get collection
export const getData = async (
  dbcollection: string,
  limitN: number,
  whereCondition?: WhereCondition,
  orderByCondition?: orderByCondition
) => {
  if (!dbcollection || !limitN) {
    return {
      data: null,
      lastVisibleDoc: null,
      hasMore: null,
      error: null,
    };
  }

  try {
    const collRef = collection(db, dbcollection);
    let querySelection = query(collRef, limit(limitN));

    if (whereCondition && Object.keys(whereCondition).length > 0) {
      querySelection = query(
        collRef,
        where(
          whereCondition?.key,
          whereCondition?.filterOperation,
          whereCondition?.value
        ),
        limit(limitN)
      );
    }
    if (orderByCondition && Object.keys(orderByCondition).length > 0) {
      querySelection = query(
        collRef,
        orderBy(orderByCondition?.fieldPath, orderByCondition?.filterOperation),
        limit(limitN)
      );
    }
    if (
      whereCondition &&
      Object.keys(whereCondition).length > 0 &&
      orderByCondition &&
      Object.keys(orderByCondition).length > 0
    ) {
      querySelection = query(
        collRef,
        where(
          whereCondition?.key,
          whereCondition?.filterOperation,
          whereCondition?.value
        ),
        orderBy(orderByCondition?.fieldPath, orderByCondition?.filterOperation),
        limit(limitN)
      );
    }
    const docSnap = await getDocs(querySelection);
    let data = null;
    let lastVisibleDoc = null;
    let hasMore = null;
    let error = null;

    lastVisibleDoc = docSnap.docs[docSnap.docs.length - 1];
    data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    hasMore = data.length === limitN ? true : false;
    console.log("");

    return { data, lastVisibleDoc, hasMore, error };
  } catch (e) {
    return {
      data: null,
      lastVisibleDoc: null,
      hasMore: null,
      error: e,
    };
  }
};

// query data / pagination
export const loadMoreData = async (
  dbcollection: string,
  lastVisibleDoc: any,
  limitN: number
) => {
  if (!dbcollection || !lastVisibleDoc || !limitN) {
    return;
  }
  try {
    const collRef = collection(db, dbcollection);
    const docSnap = await getDocs(
      query(collRef, startAfter(lastVisibleDoc), limit(limitN))
    );
    let data = [];
    let lastVisible = null;
    let hasMore = null;
    let error = null;

    lastVisible = docSnap.docs[docSnap.docs.length - 1];
    docSnap.forEach((post: { id: any; data: () => any }) => {
      data.push({ id: post.id, ...post.data() });
    });
    hasMore = data.length == limitN;
    return { data, lastVisible, hasMore, error };
  } catch (e) {
    return {
      data: null,
      lastVisible: null,
      hasMore: null,
      error: e,
    };
  }
};

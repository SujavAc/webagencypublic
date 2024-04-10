import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../config";
// add
export default async function addSubscribeData(dbcollection: string, data) {
    let result = null;
    let error = null;
    let size = null;
    const newData = {
        ...data,
        active: true,
        suspend: false,
        date: Timestamp.now(),
    }
    // check if already exist or not
    const q = query(collection(db, dbcollection), where("email", "==", newData?.email));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.size >= 1){
        size = querySnapshot.size;
    } else {
        try {
            result = await addDoc(collection(db, dbcollection), newData);
        } catch (e) {
            error = e;
        }
    }
    

    return { result, error, size };
}
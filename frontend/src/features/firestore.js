import { initializeApp } from 'firebase/app';
import { firestore } from "./firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  getFirestore,
  query,
  collection,
  limit,
  where,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

const firebase = initializeApp({
  
});

export const firestore = getFirestore(firebase);

function Products() {
  // Define a query reference using the Firebase SDK
  const ref = query(
    collection(firestore, "products"),
    limit(10),
    where("state", "==", "active")
  );

  // Provide the query to the hook
  const query = useFirestoreQuery(["products"], ref);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const snapshot = query.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();

    return <div key={docSnapshot.id}>{data.name}</div>;
  });
}
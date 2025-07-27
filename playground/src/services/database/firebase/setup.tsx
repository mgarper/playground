// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import type { DocumentData } from "firebase/firestore";
import { getFirestore, doc, setDoc, getDoc, DocumentSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLA7weM54S-jmdPpRBZTMvRBEcjx5-SQ",
  authDomain: "playground-824b3.firebaseapp.com",
  projectId: "playground-824b3",
  storageBucket: "playground-824b3.firebasestorage.app",
  messagingSenderId: "68283790236",
  appId: "1:68283790236:web:087e89f139d8492a74ce59",
  measurementId: "G-H9FY3B7CFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to get data from Firestore by collection name and document ID
async function getData(collectionName: string, docId: string): Promise<DocumentData | undefined> {
    const docRef = doc(db, collectionName, docId);  // Reference to the document
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);  // Get the document snapshot

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");  // If document doesn't exist
    }
}

async function setData(collectionName: string, docId: string, data: any): Promise<void> {
    const docRef = doc(db, collectionName, docId);  // Reference to the document

    try {
        await setDoc(docRef, data);
        console.log(`Document ${docId} in '${collectionName}' successfully written!`);
    } catch (error) {
        console.error("Error writing document:", error);
    }
}

export default { getData, setData };
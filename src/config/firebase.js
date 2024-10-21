import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDPcoT5RvTbjmkefBJ8xXldd1FV66YtgdQ",
    authDomain: "adwika-enterprise.firebaseapp.com",
    projectId: "adwika-enterprise",
    storageBucket: "adwika-enterprise.appspot.com",
    messagingSenderId: "801409702361",
    appId: "1:801409702361:web:a36f252ab8148df47b21c8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imagedb = getStorage(app);
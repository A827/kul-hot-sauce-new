import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlrzec6JZUstxau67dwKUdWkvbmpreJdc",
  authDomain: "kul-hot-sauce.firebaseapp.com",
  projectId: "kul-hot-sauce",
  storageBucket: "kul-hot-sauce.firebasestorage.app",
  messagingSenderId: "610797987115",
  appId: "1:610797987115:web:4ad57e5efec3e1f18ed16e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

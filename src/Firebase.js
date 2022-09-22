import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_im-piQDsa0GyBFs7RfKrMYBIh4F15mE",
  authDomain: "disney-clone-f5dca.firebaseapp.com",
  projectId: "disney-clone-f5dca",
  storageBucket: "disney-clone-f5dca.appspot.com",
  messagingSenderId: "340535953348",
  appId: "1:340535953348:web:93411c5bfed494e08dc691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
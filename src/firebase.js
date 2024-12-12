import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCtMzuLSdgmM4e4qQUttrAa4Njo79m74",
  authDomain: "movieaddict-d6a19.firebaseapp.com",
  projectId: "movieaddict-d6a19",
  storageBucket: "movieaddict-d6a19.firebasestorage.app",
  messagingSenderId: "1092435410467",
  appId: "1:1092435410467:web:504494864c70c9f8907b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
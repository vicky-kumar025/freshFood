
import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY ,
  authDomain: "freshfood-3608f.firebaseapp.com",
  projectId: "freshfood-3608f",
  storageBucket: "freshfood-3608f.firebasestorage.app",
  messagingSenderId: "426662569680",
  appId: "1:426662569680:web:f931b9731705cbc99f20d5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}
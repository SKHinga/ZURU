import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbhVOqdeexIrLy56Ob68dE-b1wvNR64GU",
  authDomain: "zurubnb.firebaseapp.com",
  projectId: "zurubnb",
  storageBucket: "zurubnb.appspot.com",
  messagingSenderId: "350911043334",
  appId: "1:350911043334:web:f7d8cecb655cd247df3087"
};

const app = initializeApp(firebaseConfig);

export default app;

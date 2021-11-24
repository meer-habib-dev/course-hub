import firebaseConfig from "./Firebase.confiq";
import { initializeApp } from "firebase/app";

const FireInit = () => {
    initializeApp(firebaseConfig);
}

export default FireInit;
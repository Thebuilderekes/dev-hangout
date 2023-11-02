// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDTrrdjgaDBhdS895GTpfFKGiGevyrnfbA",
	authDomain: "dev-hangout-fcdaf.firebaseapp.com",
	projectId: "dev-hangout-fcdaf",
	storageBucket: "dev-hangout-fcdaf.appspot.com",
	messagingSenderId: "366372785263",
	appId: "1:366372785263:web:4ac403e5d0ea29a42c119a",
	measurementId: "G-6NDP3GC1HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, app, firestore };
// const analytics = getAnalytics(app);

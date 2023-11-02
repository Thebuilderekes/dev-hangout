import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

let dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
	let postObject = {
		status: status,
	};
	addDoc(dbRef, postObject)
		.then((res) => {
			console.log("Post status working");
		})

		.catch((err) => {
			console.log(err);
		});
};

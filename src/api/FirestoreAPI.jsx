import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

let dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
	let object = {
		status: status,
	};
	addDoc(dbRef, object)
		.then((res) => {
			console.log("Post status working");
		})

		.catch((err) => {
			console.log("Post status error");
		});
};

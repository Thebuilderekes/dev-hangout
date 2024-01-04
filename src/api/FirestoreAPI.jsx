import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

// The given code is a JavaScript code that interacts with a Firebase Firestore database. It includes two functions:  postStatus  and  getStatus .

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const postStatus = (status) => {
	let postObject = {
		status: status,
	};

	addDoc(postsRef, postObject)
		.then((res) => {
			toast.success("Post successful"); //show this message after you make a post
		})

		.catch((err) => {
			console.log(err);
		});
};

// The  postStatus  function takes a  status  parameter and creates a new document in the "posts" collection in the Firestore database. It uses the  addDoc  function from the Firestore library to add the document. If the operation is successful, it displays a success message using the  toast  function from the "react-toastify" library. If there is an error, it logs the error to the console.

//to get all our posts we need a function onSnapshot

export const getStatus = (setAllStatuses) => {
	onSnapshot(postsRef, (response) => {
		//getStatus function takes in setAllStatuses and then arguements passed into setAllStatuses becomes the state value of the allStatuses variable in postUpdate > index.jsx component
		setAllStatuses(
			response.docs.map((docs) => {
				return { ...docs.data(), id: docs.id };
			})
		);
	});
};

export const postUserData = (obj) => {
	addDoc(userRef, obj)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});
};

// The  getStatus  function takes a  setAllStatuses  parameter, which is a function used to update the state variable  allStatuses  in the "postUpdate > index.jsx" component. It uses the  onSnapshot  function from the Firestore library to listen for changes in the "posts" collection. Whenever there is a change, the function retrieves the updated documents and maps them to a new array of objects. Each object includes the document data and its ID. Finally, it calls the  setAllStatuses  function and passes the updated array as an argument to update the state variable.

// In summary, the code allows users to post a status and retrieve all the posted statuses from a Firestore database. The  postStatus  function adds a new document to the database, while the  getStatus  function listens for changes in the database and updates the state variable with the retrieved data.

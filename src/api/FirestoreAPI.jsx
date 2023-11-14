import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
	let postObject = {
		status: status,
	};

	addDoc(dbRef, postObject)
		.then((res) => {
			toast.success("Post successful"); //show this message after you make a post
		})

		.catch((err) => {
			console.log(err);
		});
};

//to get all our posts we need a function onSnapshot

export const getStatus = (setAllStatuses) => {
	onSnapshot(dbRef, (response) => {
		//getStatus function takes in setAllStatuses and then arguements passed into setAllStatuses becomes the state value of the allStatuses variable in postUpdate > index.jsx component
		setAllStatuses(
			response.docs.map((docs) => {
				return { ...docs.data(), id: docs.id };
			})
		);
	});
};

/*
Step-by-step explanation of the getStatus function code: 
1. The code exports a function named  getStatus  using the  export  keyword. 
2. The function has an arrow function syntax  () =>  and does not take any parameters. 
3. Inside the function, the  onSnapshot  function is called with two arguments:  dbRef  and an anonymous arrow function. 
4. The  onSnapshot  function listens for changes in the  dbRef  (database reference) and executes the anonymous arrow function whenever a change occurs. 
5. Inside the anonymous arrow function, a  console.log  statement is used to log the output. 
6. The  response  object received by the anonymous arrow function contains the documents retrieved from the database reference. 
7. The  map  function is called on  response.docs  to iterate over each document in the response. 
8. For each document, the arrow function within the  map  function spreads the data using the spread operator  { ...docs.data() } . 
9. The spread operator creates a new object containing the data from the document. 
10. The  map  function returns an array of these objects. 
11. The array of objects is then logged to the console.

*/

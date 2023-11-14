## Steps to enabling authentication from firebase console

- Go to authenticcation in fire bae consle
- Go to get started
- click email/password
- Toggle enable on

## Files

### api > firestorAPI

This code is a function called "postStatus" that takes a parameter called "status". It creates a new object called "postObject" with a property called "status" that is assigned the value of the "status" parameter. It then uses the "addDoc" function from the Firestore library to add the "postObject" to the "posts" collection in the Firestore database. If the addition is successful, it logs "Post status working" to the console. If there is an error, it logs the error to the console.

Step-by-step explanation of the code:

1. Import the "addDoc" and "collection" functions from the "firebase/firestore" module.
2. Import the "firestore" object from the "../firebaseConfig" module.
3. Create a variable called "dbRef" and assign it the result of calling the "collection" function with the "firestore" object and the string "posts" as arguments. This creates a reference to the "posts" collection in the Firestore database.
4. Define and export a function called "postStatus" that takes a parameter called "status".
5. Inside the "postStatus" function, create a new object called "postObject" with a property called "status" that is assigned the value of the "status" parameter.
6. Call the "addDoc" function with the "dbRef" variable and the "postObject" as arguments. This adds the "postObject" to the "posts" collection in the Firestore database.
7. If the addition is successful, the "then" callback function is executed and logs "Post status working" to the console.
8. If there is an error, the "catch" callback function is executed and logs the error to the console.

### root - main.jsx

This component contains React code that renders a component called `RouterProvider` from the `react-router-dom` library and a component called `ToastContainer` from the `react-toastify` library. It also applies some CSS styles from an external file called `index.css`.

Step by step explanation of the code:

1. The code imports the necessary modules from the React and ReactDOM libraries.
2. It imports the ``ToastContainer` component` from the `react-toastify` library.
3. It imports the `RouterProvider` component from the `react-router-dom` library.
4. It imports the `router` object from a file called `Routes`.
5. It imports the CSS styles from an external file called `index.css`.
6. It uses the ``ReactDOM.createRoot` method to create a root element with the id `root` and renders the following JSX code inside it:
   - A `<React.StrictMode>` component, which is used for highlighting potential problems in the application during development.
   - The `RouterProvider` component with a prop called `router` set to the imported `router` object.
   - The `ToastContainer` component.
7. The rendered JSX code is wrapped in the `ReactDOM.createRoot` method and rendered to the DOM.

### root - index.js

The code in this file is creating a router using the createBrowserRouter function from the react-router-dom library. It defines two routes: one for the path `/` which renders the Login component, and another for the path `/register` which renders the Register component. The router object is then exported as router .

Step by step explanation of the code:

1. Import the createBrowserRouter function from the react-router-dom library.
2. Import the Login component from the `../Pages/Login` file.
3. Import the Register component from the `../Pages/Register` file.
4. Create a router using the createBrowserRouter function and pass an array of route objects as an argument.
5. The first route object has a path property set to `/`, indicating that it matches the root URL. The element property is set to <Login /> , which means the Login component will be rendered when this route is matched.
6. The second route object has a path property set to `/register`, indicating that it matches the `/register` URL. The element property is set to <Register /> , so the Register component will be rendered when this route is matched.
7. The router object is exported as router

# dev-hangout

## firebase functions available

`loginWithUsernameAndPassword` and <br>
`registerWithUsernameAndPassword`

using these functions you can create forms that will alow you to register and login. When you register sucessfully with your email and password, an account shows up in the firebase console.
After registeration, you can sign in with those credentials and there would be no error in the console

## Posting functionality

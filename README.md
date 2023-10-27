## Steps to enabling authentication from firebase console

- Go to authenticcation in fire bae consle
- Go to get started
- click email/password
- Toggle enable on

## Files

### index.js

The code in this file is creating a router using the createBrowserRouter function from the react-router-dom library. It defines two routes: one for the path "/" which renders the Login component, and another for the path "/register" which renders the Register component. The router object is then exported as router .

Step by step explanation of the code:

1. Import the createBrowserRouter function from the react-router-dom library.
2. Import the Login component from the "../Pages/Login" file.
3. Import the Register component from the "../Pages/Register" file.
4. Create a router using the createBrowserRouter function and pass an array of route objects as an argument.
5. The first route object has a path property set to "/", indicating that it matches the root URL. The element property is set to <Login /> , which means the Login component will be rendered when this route is matched.
6. The second route object has a path property set to "/register", indicating that it matches the "/register" URL. The element property is set to <Register /> , so the Register component will be rendered when this route is matched.
7. The router object is exported as router

# dev-hangout

## firebase functions available

`loginWithUsernameAndPassword` and <br>
`registerWithUsernameAndPassword`

using these functions you can create forms that will alow you to register and login. When you register sucessfully with your email and password, an account shows up in the firebase console.
After registeration, you can sign in with those credentials and there would be no error in the console

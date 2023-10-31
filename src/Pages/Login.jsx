import { useEffect } from "react";
import LoginComponent from "../components/Login/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Login() {
	let navigate = useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			if (res?.accessToken) {
				navigate("/home");
			}
		});
	}, []);
	return <LoginComponent />;
}

export default Login;

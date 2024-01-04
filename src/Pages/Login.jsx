import { useEffect, useState } from "react";
import Loader from "../components/Common/Loader/Loader.jsx";
import LoginComponent from "../components/Login/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Login() {
	const [loading, setLoading] = useState(true);

	let navigate = useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			if (res?.accessToken) {
				navigate("/home");
			} else {
				setLoading(false);
			}
		});
	}, []);
	return loading ? <Loader /> : <LoginComponent />;
}

export default Login;

import { useEffect } from "react";

import React from "react";
import HomeComponent from "../components/Home/HomeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Home() {
	let navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			if (!res?.accessToken) {
				navigate("/");
			}
		});
	}, []);

	return <HomeComponent />;
}

export default Home;

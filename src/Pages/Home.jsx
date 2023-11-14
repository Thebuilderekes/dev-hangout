import { useEffect, useState } from "react";

import React from "react";
import Loader from "../components/Common/Loader/Loader";
import TopBar from "../components/Common/TopBar";
import HomeComponent from "../components/Home/HomeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Home() {
	let navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			if (!res?.accessToken) {
				navigate("/");
			} else {
				setLoading(false);
			}
		});
	}, []);

	return loading ? (
		<Loader />
	) : (
		<>
			<TopBar />
			<HomeComponent />
		</>
	);
}

export default Home;

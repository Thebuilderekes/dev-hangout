import React from "react";
import { useState } from "react";
import { RegisterAPI, GoogleSignAPI } from "../../api/AuthAPI";
import { postUserData } from "../../api/FirestoreAPI";
import "../../Sass/LoginComponent.css";

import Logo from "../Logo/Logo";
import MainHeading from "../Headings/Heading";
import Paragraph from "../Paragraph/Paragraph";
import googleLogo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function RegisterComponent() {
	let navigate = useNavigate();

	const [credentials, setCredentials] = useState({});

	async function register(e) {
		try {
			e.preventDefault();
			let res = await RegisterAPI(credentials.email, credentials.password);
			toast.success("Account created", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			postUserData({ name: credentials.name, email: credentials.email });
			navigate("/home"); /* navigate to  the home component*/
			localStorage.setItem("userEmail", res.user.email);
			console.log(res);
		} catch (error) {
			toast.error("cannot create account, sign in with google");
			console.log(error);
		}
	}

	function googleSignIn(e) {
		e.preventDefault();

		try {
			let response = GoogleSignAPI();

			//toast indicator will show when
			toast.success("Account created", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			navigate("/home");
			console.log(response);
			console.log("working");
		} catch (error) {
			console.log(error);
			toast.error("account cannot be created, try signing in with google");
		}
	}

	return (
		<>
			<Logo />
			<div className="login-container">
				<MainHeading className="main-heading" message="Register your account" />
				<Paragraph
					className="text"
					text="Connect with other Beredugo descendants"
				/>
				<p></p>
				<form id="login-form" name="login" className="login-form">
					<input
						id="name"
						name="name"
						type="text"
						autoComplete="true"
						className="common-input"
						onChange={(event) =>
							setCredentials({
								...credentials,
								name: event.target.value,
							})
						}
						placeholder="Enter your name"
					/>
					<input
						id="username"
						name="username"
						type="text"
						autoComplete="true"
						className="common-input"
						onChange={(event) =>
							setCredentials({
								...credentials,
								email: event.target.value,
							})
						}
						placeholder="Enter your email"
					/>
					<input
						id="password"
						type="password"
						autoComplete="true"
						className="common-input"
						onChange={(event) =>
							setCredentials({
								...credentials,
								password: event.target.value,
							})
						}
						placeholder="Enter your password"
					/>

					<button onClick={register} className="login-btn">
						Agree & Join
					</button>
				</form>

				<hr data-content="or" />
				<button className="google-btn" onClick={googleSignIn}>
					<img src={googleLogo} alt="google icon" width={40} height={40} />
					Sign in with Google
				</button>
				<div className="new-member-container">
					<Paragraph className="text" text="Already a member of the family?" />
					<a onClick={() => navigate("/")} href="">
						Sign in
					</a>
				</div>
			</div>
		</>
	);
}

export default RegisterComponent;

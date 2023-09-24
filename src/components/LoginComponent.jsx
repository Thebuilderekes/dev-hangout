import { useState } from "react";
import { LoginAPI, GoogleSignAPI } from "../api/AuthAPI";
import Logo from "./Logo";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import GoogleSignInButton from "./GoogleButton";
import { toast } from "react-toastify";
import "../Sass/LoginComponent.scss";

function LoginComponent() {
	const [credentials, setCredentials] = useState({});

	async function login(e) {
		try {
			e.preventDefault();
			let res = await LoginAPI(credentials.email, credentials.password);
			toast.success("Signed in to Dugos", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			console.log(res);
		} catch (error) {
			toast.error("Please check your credentials");
			console.log(error);
		}
	}

	function googleSignIn(e) {
		e.preventDefault();

		try {
			let response = GoogleSignAPI();
			toast.success("Signed in to Dugos", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			console.log(response);
			console.log("working");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Logo />
			<div className="login-container">
				<MainHeading className="main-heading" message="Nua o! Sign in" />
				<Paragraph className="text" text="Stay updated with family" />
				<p></p>
				<form id="login-form" name="login" className="login-form">
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

					<button onClick={login} className="login-btn">
						Sign in
					</button>
				</form>

				<hr data-content="or" />
				<GoogleSignInButton onClick={googleSignIn} />
				<button onClick={googleSignIn}>google sign in</button>
				<div className="new-member-container">
					<Paragraph className="text" text="New member?" />
					<a href="">Sign up here</a>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;

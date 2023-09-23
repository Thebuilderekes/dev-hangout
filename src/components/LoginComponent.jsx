import { useState } from "react";

import { LoginAPI } from "../api/AuthAPI";
import Logo from "./Logo";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import "../Sass/LoginComponent.scss";
import GoogleButton from "./GoogleButton";

function LoginComponent() {
	const [credentials, setCredentials] = useState({});

	async function login(e) {
		try {
			e.preventDefault();
			let res = await LoginAPI(credentials.email, credentials.password);
			console.log(res);
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
						autoComplete="true"
						className="common-input"
						onChange={(event) =>
							setCredentials({
								...credentials,
								password: event.target.value,
							})
						}
						placeholder="Enter your password"
						type="password"
					/>

					<button onClick={login} className="login-btn">
						Sign in
					</button>
				</form>

				<hr data-content="or" />
				<GoogleButton onClick={() => console.log("button clicked")} />
				<div className="new-member-container">
					<Paragraph className="text" text="New member?" />
					<a href="">Sign up here</a>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;

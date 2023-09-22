import { useState } from "react";

import { RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

function LoginComponent() {
	const [credentials, setCredentials] = useState({});
	function login() {
		try {
			let res = RegisterAPI(credentials.email, credentials.password);
			console.log("this is the response from register", res);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<h1>Login component </h1>
			<form className="login-form">
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
				/>

				<button onClick={login} className="login-btn">
					Login
				</button>

				{login()}
			</form>
		</>
	);
}

export default LoginComponent;

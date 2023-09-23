import { useState } from "react";

import { LoginAPI } from "../api/AuthAPI";
import Logo from "./Logo";
import MainHeading from "./MainHeading";
import "../Sass/LoginComponent.scss";

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
				<MainHeading message="Nua, Sign in" />
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
				</form>
			</div>
		</>
	);
}

export default LoginComponent;

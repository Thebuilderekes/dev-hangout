import { useState } from "react";
import { LoginAPI, GoogleSignAPI } from "../../api/AuthAPI";
import "../../Sass/LoginComponent.css";
import Logo from "../Logo/Logo";
import MainHeading from "../Headings/Heading";
import Paragraph from "../Paragraph/Paragraph";
import googleLogo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import { navigate } from "../../helper/UseNavigate";

function LoginComponent() {
	let navigate = useNavigate();

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
			navigate("/home");
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

			//toast indicator will show when
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
			navigate("/home");
			console.log(response);
			console.log("working");
		} catch (error) {
			console.log(error);
			toast.error("please check your credentials");
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
				<button className="google-btn" onClick={googleSignIn}>
					<img src={googleLogo} alt="google icon" width={40} height={40} />
					Sign in wit Google
				</button>
				<div className="new-member-container">
					<Paragraph className="text" text="New member?" />
					<a onClick={() => navigate("/register")} href="">
						Sign up here
					</a>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;

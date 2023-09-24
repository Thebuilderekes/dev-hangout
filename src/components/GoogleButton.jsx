import googleLogo from "../assets/download.png";
// import "../Sass/Button.css";
function GoogleSignInButton() {
	return (
		<button className="google-btn">
			<img src={googleLogo} alt="google icon" width={40} height={40} />
			Sign in with Google
		</button>
	);
}

export default GoogleSignInButton;

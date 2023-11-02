import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineBell, AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import "./topBar.css";

function TopBar() {
	const style = { color: "white", cursor: "pointer" };
	return (
		<div className="nav-container">
			<Link className="home-logo" to="/">
				DUGOS
			</Link>
			<nav>
				<ul>
					<Link to="/">
						<AiFillHome style={style} size={40} />
					</Link>
					<Link to="/register">
						<AiOutlineBell style={style} size={40} />
					</Link>
					<Link to="/">
						<AiOutlineMessage style={style} size={40} />
					</Link>
					<Link to="/">
						<FaUser style={style} size={40} />
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default TopBar;

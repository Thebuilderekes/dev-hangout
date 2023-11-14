import React from "react";
import { Space, Spin } from "antd";
import "./loader.css";

function Loader() {
	return (
		<div className="loader">
			Loading... please wait
			<Space size="middle">
				<Spin size="large" />
			</Space>
		</div>
	);
}

export default Loader;

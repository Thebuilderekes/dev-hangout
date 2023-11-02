import React from "react";
import { postStatus } from "../../../api/FirestoreAPI";
import { useState } from "react";
import ModalComponent from "../Modal/index";

import "./index.css";

function PostStatus() {
	const [modalOpen, setModalOpen] = useState(false);
	const [status, setStatus] = useState("");

	const handleModal = () => {
		console.log("modal clicked");
		setModalOpen(true);
	};
	const sendStatus = () => {
		postStatus(status);
	};
	return (
		<div className="post-status-container">
			<div className="post-status">
				<button className="open-post-modal" onClick={handleModal}>
					Say something
				</button>
			</div>
			<ModalComponent
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				status={status}
				sendStatus={sendStatus}
				setStatus={setStatus}
			/>
		</div>
	);
}
export default PostStatus;

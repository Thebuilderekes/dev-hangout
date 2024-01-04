import React from "react";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import { useState, useMemo } from "react";
import ModalComponent from "../Modal/index";
import PostCard from "../PostCard/PostCard";

import "./index.css";

function PostStatus() {
	const [modalOpen, setModalOpen] = useState(false);
	const [status, setStatus] = useState("");
	const [allStatuses, setAllStatuses] = useState([]);

	const handleModal = () => {
		console.log("modal clicked");
		setModalOpen(true); // open modal when you click to write something
	};
	const sendStatus = async () => {
		await postStatus(status);
		await setModalOpen(false); //close modal after you send the post
		await setStatus(""); //make post modal to be empty after post
	};

	useMemo(() => {
		getStatus(setAllStatuses);
		//getStatus takes in setAllStatuses function as an argument which at this time is an empty array but will be later given a value of all the statuses spread into it's array in the postUpdate > index.jsx component so that allStatuses can be mapped through and presented on screen here.
	}, []);
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
			<div className="posts-list">
				{allStatuses.map((posts, id) => {
					return <PostCard key={posts.id} posts={posts} />;
				})}
			</div>
		</div>
	);
}
export default PostStatus;

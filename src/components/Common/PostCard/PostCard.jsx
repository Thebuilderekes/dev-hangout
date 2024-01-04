import React from "react";
import "./postcard.css";

function PostCard({ posts }) {
	return <div className="post_card">{posts.status}</div>;
}

export default PostCard;

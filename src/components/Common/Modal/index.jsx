import { Modal, Button } from "antd";
import "./index.css";
const ModalComponent = ({
	modalOpen,
	setModalOpen,
	setStatus,
	status,
	sendStatus,
}) => {
	return (
		<>
			<Modal
				title="Create a post"
				centered
				open={modalOpen}
				onOk={() => setModalOpen(false)}
				onCancel={() => setModalOpen(false)}
				footer={[
					<Button
						onClick={sendStatus}
						key="submit"
						type="primary"
						disabled={status.length > 0 ? false : true}
					>
						Post
					</Button>,
				]}
			>
				<input
					className="modal-input"
					placeholder="What do you want to talk about?"
					onChange={(event) => setStatus(event.target.value)}
					value={status}
				/>
			</Modal>
		</>
	);
};
export default ModalComponent;

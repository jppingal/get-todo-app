import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import Tasks from './Tasks';
import UpdateTaskModal from './UpdateTaskModal';
const Home = () => {
	const [callbackData, setCallbackData] = useState({})
	const handleCallback = (childData) => {
		setCallbackData(childData);
	}
	const [addTaskModal, setAddTaskModal] = useState(false);
	const [updateTaskModal, setUpdateTaskModal] = useState(false);
	return (
		<div className='home-container'>
			<header className='header-container'>
				<span className='header-title'>To Do List</span>
				<span className='add-task' onClick={() => setAddTaskModal(true)} >Add Task</span>
			</header>
			<Tasks OnClickUpdate={() => setUpdateTaskModal(true)}
			/>
			{!!addTaskModal && <AddTaskModal handleCallBack={handleCallback} onClose={() => setAddTaskModal(false)} />}
			{!!updateTaskModal && <UpdateTaskModal onClose={() => setUpdateTaskModal
				(false)} data={callbackData} />}
		</div>
	)
};
export default Home;
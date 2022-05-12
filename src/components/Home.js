import React, { useState, useCallback } from 'react';
import AddTaskModal from './AddTaskModal';
import ToDoLists from './ToDoLists';
import UpdateTaskModal from './UpdateTaskModal';
const Home = () => {
	const [callbackData, setCallbackData] = useState({})
	const handleEditCallback = (childData) => {
		setCallbackData(childData);
	}
	const [callbackChecked, setCallbackChecked] = useState()
	const handleCheckedTaskCallback = (checked) => {
		setCallbackChecked(checked)
	}
	const [addTaskModal, setAddTaskModal] = useState(false);
	const [updateTaskModal, setUpdateTaskModal] = useState(false);
	return (
		<div className='main'>
			<div className='home-container'>
				<header className='header-container'>
					<span className='header-title'>To Do List</span>
					<span className='add-task' onClick={() => setAddTaskModal(true)} >Add Task</span>
				</header>
				<ToDoLists OnClickUpdate={() => setUpdateTaskModal(true)}
					handleEditTaskCallback={handleEditCallback}
					handleCheckedTaskCallback={handleCheckedTaskCallback}
				/>
				{!!addTaskModal && <AddTaskModal onClose={() => setAddTaskModal(false)} />}
				{!!updateTaskModal && <UpdateTaskModal onClose={() => setUpdateTaskModal(false)} taskData={callbackData} CheckedData={callbackChecked} />
				}
			</div>
		</div>
	)
};
export default Home;
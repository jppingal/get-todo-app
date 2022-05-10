import React, { useEffect, useState } from 'react';
import DatePickers from './DatePickers';

const getLocalItems = () => {
	let getTasks = localStorage.getItem('TaskItems');
	console.log(" update local data", getTasks);
	if (getTasks) {
		return JSON.parse(localStorage.getItem('TaskItems'))
	} else {
		return [];
	}
}

const AddTaskModal = (props) => {
	const [tasks, setTasks] = useState(getLocalItems())
	const [data, setData] = useState({
		title: "",
		description: "",
		date: "",

	})

	let weekday = new Date().toLocaleString('en-us', { weekday: 'long' });
	console.log('Weekday-okoo', weekday);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		let weekday = new Date().toLocaleString('en-us', { weekday: 'long' });
		setData({ ...data, weekday, [name]: value })

	}

	const handleSubmitTask = (e) => {
		console.log("data", data);
		e.preventDefault();
		setTasks([...tasks, data])
	}

	useEffect(() => {
		localStorage.setItem('TaskItems', JSON.stringify(tasks))
	}, [tasks])

	return (
		<div className='dialog-container'>
			<form className='form-container' onSubmit={handleSubmitTask} >
				<h2 className='dialog-heading'>
					Add Task Here
				</h2>
				<div className='text-area'>
					<label>Task Name</label>
					<input
						className='input-box'
						type="text"
						value={data.title}
						name="title"
						autoComplete='off'
						onChange={handleInputChange}
					/>
				</div>
				<div className='text-area'>
					<label>Description</label>
					<textarea
						className='input-box'
						type="text"
						value={data.description}
						name="description"
						autoComplete='off'
						onChange={handleInputChange}
					/>
				</div>
				<div className='text-area'>
					<label>Due</label>
					<div className='input-box'>
						<DatePickers />
					</div>
				</div>
				<div className='text-area'>
					<label>Status</label>
					<span className='task-status'>Pending</span>
				</div>
				<div className='form-control'>
					<button className='btn cancel-btn'
						type="submit"
						onClick={() => props.onClose()}
					>
						Cancel</button>
					<button className='btn add-btn' type='submit' >Add New Task</button>
				</div>
			</form>
		</div>
	)
};
export default AddTaskModal;
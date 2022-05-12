import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const getLocalItems = () => {
	let getTasks = localStorage.getItem('TaskItems');

	if (getTasks) {
		return JSON.parse(localStorage.getItem('TaskItems'))
	} else {
		return [];
	}
}

const AddTaskModal = (props) => {
	const [tasks, setTasks] = useState(getLocalItems())
	const [data, setData] = useState({
		description: "",
		title: "",
		due: "",
	})
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data, [name]: value
		})
	}

	const handleTaskOnSubmit = (e) => {
		e.preventDefault();
		const newRecord = {
			id: new Date().getTime().toString(),
			title: data.title,
			description: data.description,
			due: startDate.toLocaleString('en-us', { weekday: 'long' })
		}
		window.location.reload(true)
		setTasks([...tasks, newRecord]);
	}

	useEffect(() => {
		localStorage.setItem('TaskItems', JSON.stringify(tasks))
	}, [tasks])
	const [startDate, setStartDate] = useState(null);
	return (
		<div className='dialog-container'>
			<form className='form-container' onSubmit={handleTaskOnSubmit} >
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
						<DatePicker
							className='datePikar-box'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							maxDate={addDays(new Date(), -5)}
							placeholderText="Select a date in 1to 7 days in the future"
						/>
					</div>
				</div>
				<div className='text-area'>
					<label>Status</label>
					<span className='task-toggle'>
						<h4> Pending</h4>
					</span>
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
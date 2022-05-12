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

const UpdateTaskModal = (props) => {

	const [tasks, setTasks] = useState(getLocalItems())

	let result = tasks.filter((item) => item.id === props.taskData);
	//console.log(result);

	const [startDate, setStartDate] = useState(null)

	const [data, setData] = useState({
		id: result[0]?.id,
		title: result[0]?.title,
		description: result[0]?.description,
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value })
	}

	const handleSubmitTask = (e) => {
		e.preventDefault();
		const newState = tasks.map(obj =>
			obj.id === data.id ? { ...obj, title: data.title, description: data.description, due: startDate.toLocaleString('en-us', { weekday: 'long' }) } : obj
		);
		window.location.reload(true)
		setTasks(newState)
	}

	useEffect(() => {
		localStorage.setItem('TaskItems', JSON.stringify(tasks))
	}, [tasks])

	return (
		<div className='dialog-container'>
			<form className='form-container' onSubmit={handleSubmitTask} >
				<h2 className='dialog-heading'>
					Update Task Here
				</h2>
				<div className='text-area'>
					<label>Task Name</label>
					<input
						className='input-box'
						type="text"
						defaultValue={data.title}
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
						defaultValue={data.description}
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
						<h4>
							{props.CheckedData ? "completed" : "Pending"}
						</h4>
					</span>
				</div>
				<div className='form-control'>
					<button className='btn cancel-btn'
						type="submit"
						onClick={() => props.onClose()}
					>
						Cancel</button>
					<button className='btn add-btn' type='submit' >
						Add Update Task
					</button>
				</div>
			</form>
		</div>
	)
};
export default UpdateTaskModal;
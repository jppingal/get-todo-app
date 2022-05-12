import React, { useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const getLocalItems = () => {
	const getTasks = localStorage.getItem('TaskItems');
	if (getTasks) {
		return JSON.parse(localStorage.getItem('TaskItems'))
	} else {
		return [];
	}
}

const Tasks = () => {
	return (
		<div>Sunday1</div>
	)
}
const ToDoLists = (props) => {
	const [item, setItem] = useState(getLocalItems())

	const handleUpdate = (item) => {
		props.OnClickUpdate(item);
		props.handleEditTaskCallback(item);
	}

	const handleDeleteTask = (index) => {
		const newList = item.filter((elem) => index !== elem.id);
		setItem(newList);
	}
	const [checked, setChecked] = useState()
	props.handleCheckedTaskCallback(checked);
	const handleCheckToggle = (id) => {
		let mapped = item.map(task => {
			return task.id == id ? { ...item, complete: !item.complete } : { ...task };
		});
		if (mapped == true)
			setChecked(mapped);
	}
	useEffect(() => {
		localStorage.setItem('TaskItems', JSON.stringify(item))
	}, [item])

	const days = item.map((item) => {
		return (
			item.due
		)
	})
	let outputArray = Array.from(new Set(days))
	console.log("item", outputArray[0]);

	const map = {
		'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6,
		'Sunday': 7
	};
	outputArray.sort((a, b) => {
		return map[a] - map[b];
	});
	console.log("xxxxx", outputArray)
	return (
		<div className='Tasks-container'>
			{outputArray.map((days, index) => (

				<div className='Tasks' key={index}>
					<h3>{days}</h3>
					{item.map((elem, index) => {
						if (days === elem.due) {
							return (
								<div className='' key={index}>
									<div className='task-details' >
										<span className='check-box'>
											<input type="checkbox"
												onClick={() => handleCheckToggle(elem.id)} />
										</span>
										<div className='task-box'>
											<div className='task-title' >{elem.title} </div>
											<div className='task-control'>
												<EditIcon className='edit-task'
													onClick={() => handleUpdate(elem.id)} />
												<DeleteOutlineIcon className='delete-task' type="click" onClick={() => handleDeleteTask(elem.id)} />
											</div>
										</div>
									</div>
								</div>
							)
						}

					}
					)}
				</div>
			)
			)}
		</div>

	)

};
export default ToDoLists;
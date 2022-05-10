import React, { useState } from 'react';
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
const Tasks = (props) => {
	const [item, setItem] = useState(getLocalItems())

	const handleUpdate = (item) => {
		props.OnClickUpdate(item);
		props.handleCallBack(item);
	}
	const handleDeleteTask = (title) => {
		const newList = item.filter((item, index) => index !== title);
		setItem(newList);
		localStorage.clear("item.title");
	}
	return (
		<div className='Tasks-container'>
			{item.map((newArr, id) => {
				return (
					<div className='Tasks' key={id}>
						<div className='task-days'>
							<h4>{newArr.weekday}</h4>
						</div>

						<div className='task-details' >
							<span className='check-box'>
								<input type="checkbox" />
							</span>
							<div className='task-box'>
								<div className='task-title' >{newArr.title} </div>
								<div className='task-control'>
									<EditIcon className='edit-task'
										onClick={() => handleUpdate(item)} />
									<DeleteOutlineIcon className='delete-task' type="click" onClick={() => handleDeleteTask(id)} />
								</div>
							</div>
						</div>
					</div>
				)
			}
			)}
		</div>
	)
};
export default Tasks;
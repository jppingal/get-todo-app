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
    const [addTaskModal, setAddTaskModal] = useState(false);

    const handleUpdate = (item) => {
        props.OnClickUpdate();
        props.handleCallBack(item);
    }

    const handleDeleteTask = (id) => {
        const newList = item.filter((item, index) => index !== id);
        setItem(newList);
    }
    return (
        <div className='Tasks-container'>

            <div className='Tasks' >
                <div className='task-days'>
                    <h4>Thursday</h4>
                </div>
                {item.map((newArr, id) => {
                    return (
                        <div className='task-details' key={id}>
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
                    )}
                )}
            </div>
        </div>
    )
};
export default Tasks;
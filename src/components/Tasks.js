import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const getLocalItems =() =>{
    let getTasks = localStorage.getItem('TaskItems');
    console.log("local data", getTasks);
     if(getTasks){
         return JSON.parse(localStorage.getItem('TaskItems'))
     }else{
         return [];
     }
}
const Tasks = (props) => {
    const [item, setItem] = useState(getLocalItems())
    const [addTaskModal, setAddTaskModal] = useState(false);
    const handleUpdate = (item)=>{
        props.OnClickUpdate();
        props.handleCallBack(item);
    }
    return (
        <div className='Tasks-container'>
        
            <div className='Tasks' >
                <div className='task-days'>
                    <h4>Thursday</h4>
                </div>
                <div className='task-details'>
                    <span className='check-box'>
                        <input
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            value="Car" />
                    </span>
                    <div className='task-title'>
                    {item.map((newArr, index)=>{
                        return(
                        <span key={index}>{newArr.title}</span> ) })}
                        <span className='control-task'>
                            <EditIcon className='edit-task'
                             onClick={()=>handleUpdate(item)} />
                            <DeleteOutlineIcon className='delete-task'/>
                        </span>
                    </div>
                </div>
            </div>
      
        </div>
    )
};
export default Tasks;
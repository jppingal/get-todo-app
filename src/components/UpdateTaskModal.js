import { PinDropSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import DatePickers from './DatePickers';
// import DatePicker from "react-datepicker";

const UpdateTaskModal = (props) => {
    const [tasks, setTasks] = useState([])
    const [data, setData] = useState({
        title: props.data.title,
        description: "",
        day: ""
    })
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]:value})
        
        }
    const handleSubmitTask =(e)=>{
        e.preventDefault();
        setTasks([...tasks, data])
        console.log("data", tasks)
    }
    // useEffect(()=>{
    //     localStorage.setItem('TaskItems', JSON.stringify(tasks))
    // }, [tasks])

    return (
        <div className='dialog-container'>
            <form className='form-container'  onSubmit={handleSubmitTask} >
                <h2 className='dialog-heading'>
                    Update Task Here
                </h2>
                <div className='text-area'>
                    <label>Task Name</label>
                    <input
                        className='input-box'
                        type="text"
                        defaultValue={props.data.title}
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
                        defaultValue={props.data.title}
                        name="description"
                        autoComplete='off'
                        onChange={handleInputChange}

                    />
                </div>
                <div className='text-area'>
                    <label>Due</label>
                    <div className='input-box'>
                    <DatePickers/>
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
                    <button className='btn add-btn' type='submit' >Add Update Task</button>

                </div>
            </form>

        </div>
    )
};
export default UpdateTaskModal;
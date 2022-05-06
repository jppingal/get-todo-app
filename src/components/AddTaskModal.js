import { PinDropSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    const [startDate, setStartDate] = useState(new Date(2021, 10))
    const [tasks, setTasks] = useState(getLocalItems())
    const [data, setData] = useState({
        title: "",
        description: "",
        day: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })

    }

    const handleSubmitTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, data])
        // console.log("data", tasks)
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
                        <DatePicker className='datePikar-box'
                            autoComplete="off" selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
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
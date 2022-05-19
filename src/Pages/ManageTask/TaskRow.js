import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskRow = ({ task, refetch }) => {
    const [complete, setComplete] = useState(false)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Successfully delete task!")
                    refetch()
                } else {
                    toast.error('Failed to delete!')
                }
            })

    }

    return (
        <tr>
            <th>1</th>
            <td>{task.name}</td>
            <td className={complete ? 'line-through' : ''}>{task.description}</td>
            <td><button onClick={() => setComplete(true)} class="btn btn-sm btn-success">Complete</button></td>
            <td><button onClick={() => handleDelete(task._id)} class="btn btn-sm btn-warning">Delete</button></td>
        </tr>
    );
};

export default TaskRow;
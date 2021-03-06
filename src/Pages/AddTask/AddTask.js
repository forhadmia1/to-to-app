import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddTask = () => {
    const [user] = useAuthState(auth)
    const handleForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const description = e.target.description.value;
        const email = user.email;
        const task = { name, description, email }
        fetch('https://gentle-cliffs-72966.herokuapp.com/addTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully added task!')
                    e.target.reset();
                } else {

                    toast.error('Failed to add task!')
                }
            })

    }
    return (
        <div className='flex justify-center'>
            <div className='w-80 mt-16'>
                <h1 className='text-3xl font-bold text-center mb-10'>Add a Task Here</h1>
                <form onSubmit={handleForm} className='w-full'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Name:</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Description:</span>
                        </label>
                        <input name='description' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type='submit' className="btn btn-primary px-8 mt-4" value={'Submit'} />
                </form>
            </div>
        </div>
    );
};

export default AddTask;
import React from 'react';

const AddTask = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-80 mt-16'>
                <h1 className='text-3xl font-bold text-center mb-10'>Add a Task Here</h1>
                <form className='w-full'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text font-semibold">Name:</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text font-semibold">Description:</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type='submit' class="btn btn-primary px-8 mt-4" value={'Submit'} />
                </form>
            </div>
        </div>
    );
};

export default AddTask;
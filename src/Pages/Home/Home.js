import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-3xl text-center'>Simple To Do App</h1>
                <p className='text-md text-center mt-4'>You can add and manage your task here</p>
                <button onClick={() => navigate('/addTask')} className="btn btn-active btn-primary px-4 mt-4 btn-md block mx-auto">Get Started</button>
            </div>
        </div>
    );
};

export default Home;
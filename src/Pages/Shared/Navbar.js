import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <><li><Link to={'/addTask'}>Add Task</Link></li>
                            <li><Link to={'/manageTask'}>Manage Task</Link></li></>}
                        {!user ? <li><Link to='/login'>Login</Link></li> : <li><button onClick={() => signOut(auth)} className="btn btn-ghost">SignOut</button></li>}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Todo App</Link>
            </div>
            <div className="navbar-center hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal p-0">
                    {user && <><li><Link to={'/addTask'}>Add Task</Link></li>
                        <li><Link to={'/manageTask'}>Manage Task</Link></li></>}
                    {!user ? <li><Link to='/login'>Login</Link></li> : <li><button onClick={() => signOut(auth)} className="btn btn-ghost">SignOut</button></li>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
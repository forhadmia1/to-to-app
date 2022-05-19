import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask/AddTask';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import ManageTask from './Pages/ManageTask/ManageTask';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addTask' element={
          <RequireAuth>
            <AddTask />
          </RequireAuth>
        } />
        <Route path='/manageTask' element={
          <RequireAuth>
            <ManageTask />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

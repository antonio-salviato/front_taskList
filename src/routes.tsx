import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/Task';


export default function Routers() {
    return (
        <Routes>
            
                <Route path='/' element={<Home/>} />
                <Route path='/task' element={<TaskPage/>} />
               
            
        </Routes>
    );
}
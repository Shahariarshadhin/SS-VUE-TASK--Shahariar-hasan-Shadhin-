import React from 'react';
import './ManagementSystem.css'
import openImg from '../../assests/openPic.jpg'
import { Link } from 'react-router-dom';

const ManagementSystem = () => {
    return (
        <div className="lg:px-60 shadow-2xl">

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={openImg} className="img lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className=''>
                        <h1 className="text-5xl font-bold manage-staff">Manage Your Staff<br></br> With One Solution</h1>
                        <p className="py-6 pr-4 manage-staff-p">Smart and easy management of the employee is now possible, ignoring the manual activity and moving towards automation task is possible with SayBurgh Employee management system.</p>
                        <Link to="/dashboard" className="btn border-0 bg-[#0ea5e9]">Get Started - Its Free</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManagementSystem;
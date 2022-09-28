import React from 'react';

const ManagementSystem = () => {
    return (
        <div className="lg:px-60 shadow-2xl">

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Staff <br></br> Management<br></br> System</h1>
                        <p className="py-6 pr-4">Smart and easy management of the employee is now possible, ignoring the manual activity and moving towards automation task is possible with SayBurgh Employee management system.</p>
                        <button className="btn border-0 bg-[#0ea5e9]">Get Started - Its Free</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManagementSystem;
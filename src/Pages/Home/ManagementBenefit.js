import React from 'react';

import { FcBusinessContact, FcSerialTasks, FcTodoList } from "react-icons/fc";

const ManagementBenefit = () => {
    return (
        <div className="lg:px-60 mt-20">

            <h2 className="text-4xl text-center font-bold mb-10">Staff Management System Benefits </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                <div className="card w-82 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <h1 className="text-7xl drop-shadow-2xl"> <FcBusinessContact></FcBusinessContact></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Employee Onboarding</h2>
                        <p className='text-justify'>With SayBurgh Employee management system, it is easy to onboard new employees from a single dashboard. You get options to manage all business onboarding and employee updating and background document check, done easily with SayBurgh.</p>

                    </div>
                </div>
                <div className="card w-82 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <h1 className="text-7xl drop-shadow-2xl"><FcSerialTasks></FcSerialTasks></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Employee Management</h2>
                        <p className='text-justify'>Managing employees under various department of the business as well as allocating task and deadlines is simple with sayburgh. This helps you to manage the right resources in the right work without spending too much of time on managing manual documentations.</p>

                    </div>
                </div>
                <div className="card w-82 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <h1 className="text-7xl drop-shadow-2xl"><FcTodoList></FcTodoList></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Employee Monitoring</h2>
                        <p className='text-justify'>Employees can be only managed well when you can monitor what are their performance while they are at work. With cutehr, you can track and monitor performance of resources with asigned task and and generate reports, payroll and invoice accordingly along with other features.</p>

                    </div>
                </div>

            </div>





        </div>
    );
};

export default ManagementBenefit;
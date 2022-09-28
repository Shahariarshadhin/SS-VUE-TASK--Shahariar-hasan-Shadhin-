import React from 'react';
import dashboard from '../../assests/dashboard.jpg'
import AE from '../../assests/American E.png'
import flip from '../../assests/flipkart.png'
import herbal from '../../assests/herbalife.png'
import EY from '../../assests/ey.jpg'
import saint from '../../assests/Saint-Gobain.png'
import pepsi from '../../assests/pepsi.png'

import { FcBusinessContact, FcSerialTasks, FcTodoList, FcSurvey } from "react-icons/fc";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineLibraryBooks, MdOutlineNotificationsActive } from "react-icons/md";
import { FaLaptopCode, FaAmazonPay } from "react-icons/fa";

const ManagementBenefit = () => {
    return (
        <div className="lg:px-60 mt-20">

            <h2 className="text-4xl text-center font-bold mb-10">Staff Management System Benefits </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-6'>

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
                        <p className='text-justify'>Employees can be the only managed well when you can monitor what are their performance while they are at work. With cutehr, you can track and monitor performance of resources with asigned task and and generate reports, payroll and invoice accordingly along with other features.</p>

                    </div>
                </div>

            </div>


            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={dashboard} className="lg:max-w-lg h-96 rounded-lg " alt='' />
                    <div className='px-12'>
                        <h1 className="text-4xl font-bold">Full Clarity On Your Entire Business</h1>
                        <p className="py-6">The admin dashboard is your everyday tool as a manager. It allows you to add features to your employee app, create content, run and export reports, modify admin access, and supervise all employees from a single place. Automatically track and measure everything in your company app and make all data clearly visible and actionable.</p>

                    </div>
                </div>
            </div>


            <div>

                <h2 className="text-4xl text-center font-bold mb-20">Staff Management System Features</h2>

                <div>

                    <div className='grid grid-cols-2 lg:grid-cols-2 gap-6 '>
                        <div className="flex items-center p-2">
                            <BsClockHistory></BsClockHistory>
                            <div>
                                <button className='post-btn text-sm px-2'>Employee Onboarding</button>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <MdOutlineLibraryBooks></MdOutlineLibraryBooks>
                            <div>
                                <button className='post-btn text-sm px-2'>Resource Management</button>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FaLaptopCode></FaLaptopCode>
                            <div>
                                <button className='post-btn text-sm px-2'>Performance Monitoring</button>
                            </div>
                        </div>

                        <div className="flex items-center p-2">
                            <MdOutlineNotificationsActive></MdOutlineNotificationsActive>
                            <div>
                                <button className='post-btn text-sm px-2'>Employee Notification</button>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FcSurvey></FcSurvey>
                            <div>
                                <button className='post-btn text-sm px-2'>Employee Survey</button>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FaAmazonPay></FaAmazonPay>
                            <div>
                                <button className='post-btn text-sm px-2'>Employee Payrolls Invoices</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div>

                <h2 className="text-4xl text-center font-bold mb-20">Loved by customers from 160+ companies worldwide</h2>
                <div className='grid grid-cols-2 lg:grid-cols-6 gap-6 '>

                    <figure className='lg:h-12 w-20'><img src={flip} alt="Shoes" /></figure>
                    <figure className='lg:h-12 w-24'><img src={saint} alt="Shoes" /></figure>
                    <figure className='h-12 w-24'><img src={pepsi} alt="Shoes" /></figure>

                    <figure className='lg:h-12 w-24'><img src={AE} alt="Shoes" /></figure>
                    <figure className='lg:h-12 w-20'><img src={EY} alt="Shoes" /></figure>
                    <figure className='lg:h-12 w-20'><img src={herbal} alt="Shoes" /></figure>

                </div>
            </div>





        </div>
    );
};

export default ManagementBenefit;
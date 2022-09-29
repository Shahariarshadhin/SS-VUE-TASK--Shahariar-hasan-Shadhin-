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

                <h2 className="text-4xl text-center font-bold mb-20 text-[#06b6d4]">Staff Management System Features</h2>

                <div>

                    <div className='grid grid-cols-2 lg:grid-cols-2 gap-6 '>
                        <div className="flex items-center p-2">
                            <BsClockHistory className='text-9xl text-[#06b6d4]'></BsClockHistory>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Employee Onboarding</button>
                                <p>You can allow self on boarding or do your employee on boarding from single dashboard.</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <MdOutlineLibraryBooks className='text-7xl text-[#06b6d4]'></MdOutlineLibraryBooks>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Resource Management</button>
                                <p>You get easy to navigate options to allocate task and monitor buisness goal and dealines.</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FaLaptopCode className='text-9xl text-[#06b6d4]'></FaLaptopCode>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Performance Monitoring</button>
                                <p>With report and analytics data, you can keep a check on employees performance.</p>
                            </div>
                        </div>

                        <div className="flex items-center p-2">
                            <MdOutlineNotificationsActive className='text-9xl text-[#06b6d4]'></MdOutlineNotificationsActive>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Employee Notification</button>
                                <p>Notifiy employees with task allocation and also about events and company updates.</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FcSurvey className='text-9xl text-[#06b6d4]'></FcSurvey>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Employee Survey</button>
                                <p>Improve employee engagement by conducting surveys to take feedback from them.</p>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <FaAmazonPay className='text-9xl text-[#06b6d4]'></FaAmazonPay>
                            <div className='px-4 '>
                                <button className='post-btn text-2xl font-bold text-[#06b6d4]'>Employee Payrolls Invoices</button>
                                <p>Manage employee payment by tracking their work hours and pay the required salaries.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className='mt-20 '>

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

            <div className='mt-48 mb-10 bg-blue-100 p-10 rounded-full'>
                <h2 className="text-4xl text-center font-bold mb-8">Get your team working with Sayburgh</h2>

                <div className='lg:flex'>

                    <div className='text-center'>
                        <h1 className='text-xl font-medium  mb-2'>Create an account</h1>
                        <p>It's free to start. Tell us about your business and we'll find the best plan for your needs.</p>

                    </div>
                    <div className="divider lg:divider-horizontal"></div>




                    <div className='text-center'>
                        <h1 className='text-xl font-medium  mb-2'>Add your people</h1>
                        <p>Enter your staff into Sayburgh. They can even self-onboard to save you time.</p>

                    </div>

                    <div className="divider lg:divider-horizontal"></div>



                    <div className='text-center'>

                        <h1 className='text-xl font-medium mb-2'>Run your first payroll</h1>
                        <p>Once we have your staff and tax info, you can run payroll in just a few clicks.</p>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default ManagementBenefit;
import React from 'react';
import useAdminCard from '../../../hook/useAdminCard';
import { ToastContainer, toast } from 'react-toastify';
import './Employee.css'
import { Link } from 'react-router-dom';

const Employee = () => {

    const [admin, setAdmin] = useAdminCard();

    const deleteUser = async (id) => {
        if (window.confirm("Are You Sure!?")) {
            await fetch(`/admin/${id}`, { method: 'DELETE' })
        }
        setAdmin(admin.filter((admin) => admin.id !== id))

    }


    return (
        <div>


            <div className="overflow-x-auto mb-20">
                <h2 className='text-3xl text-purple-500 font-bold text-center mb-4'>Admin</h2>
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            admin.map(admin =>

                                <tr>

                                    {/* <td>{admin.id}</td> */}
                                    <img className='h-12 w-12 rounded-full' src={admin.img} alt="" />
                                    <td>{admin.name}</td>
                                    <td><b>{admin.department}</b></td>
                                    <td>{admin.email}</td>
                                    <td>{admin.phone_number}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-xs mx-2">Update</Link>

                                        <button className='btn btn-xs' onClick={() => deleteUser(admin.id)}> Delete</button>
                                    </td>


                                </tr>

                            )

                        }




                    </tbody>
                </table>
            </div>



            <div className="overflow-x-auto">
                <h2 className='text-3xl text-purple-500 font-bold text-center mb-4'>Employee</h2>
                <table className="table w-full change">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            admin.map(admin =>

                                <tr>

                                    {/* <td>{admin.id}</td> */}
                                    <img className='h-12 w-12 rounded-full' src={admin.img} alt="" />
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.phone_number}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-xs mx-2">Update</Link>
                                        <button className='btn btn-xs' onClick={() => deleteUser(admin.id)}> Delete</button>
                                    </td>


                                </tr>

                            )

                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Employee;
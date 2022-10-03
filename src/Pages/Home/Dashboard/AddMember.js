
import React from 'react';
import { useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
import useAdminCard from '../../../hook/useAdminCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMember = () => {

    const navigate = useNavigate();


    const [admin, setAdmin] = useAdminCard({
        name: "",
        email: "",
        phone_number: "",
        img: ""
    });



    const { name, email, phone_number, img } = admin;
    const onInputChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });

    }
    const onSubmit = async e => {
        if (window.confirm("Are You Sure!?")) {
            axios.post('../../../../public/admin.json', { name })
            navigate('/');
        }


    }


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">

                <div class="card-body">
                    <form className='' onSubmit={e => (onSubmit(e))}>


                        <div className='form-group'>
                            <input
                                type="text"
                                class="input input-bordered input-accent w-full max-w-xs mb-2"
                                placeholder="name"
                                value={name}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="email"
                                class="input input-bordered input-accent w-full max-w-xs mb-2"
                                placeholder="email"
                                value={email}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="number"
                                class="input input-bordered input-accent w-full max-w-xs mb-2"
                                placeholder="phone number"
                                value={phone_number}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="img"
                                class="input input-bordered input-accent w-full max-w-xs mb-2"
                                placeholder="Photo Url"
                                value={img}
                                onChange={e => onInputChange(e)}

                            />
                        </div>

                        <input class="input input-bordered input-accent w-full max-w-xs mb-2 bg-info" value="Upload Data" type="submit" />

                        {/* <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Email ' type="email" {...register("email")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Phone Number' type="number" {...register("price")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2 bg-info" value="Upload Data" type="submit" /> */}
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddMember;
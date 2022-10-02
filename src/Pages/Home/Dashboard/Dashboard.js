import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Employee.css'



const Dashboard = () => {



    return (
        <div class="drawer drawer-mobile">
            <input id="dashboards-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  ">

                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboards-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/addStaff">Add Staff</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;




































// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const Dashboard = () => {
//     return (
//         <div>
//             <div className="drawer">
//                 <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content">
//                     <p> this is enplyoeeeeeeeeeeeeeee</p>
//                     <Outlet></Outlet>

//                     <label htmlFor="my-drawer" className="mx-6 drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="my-drawer" className="drawer-overlay"></label>
//                     <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


//                         <li><Link to="/dashboard">Dashboard</Link></li>
//                         {/* <li><Link to="/dashboard">Dashboard</Link></li> */}

//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



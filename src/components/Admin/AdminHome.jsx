// AdminHome.jsx
import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './Adminhome.css'
import './reg.css'
const AdminHome = () => {
  return (
    <div>
        <Topbar/>
        <Sidebar/>
        <div className='aa'>
          <h1>Welcome to Admin Panel</h1>
        </div>
    </div>
  );
};

export default AdminHome;

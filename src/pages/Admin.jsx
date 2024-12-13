import React, { useState } from 'react';
import './Admin.css';
import Dashboard from './Admin-panel/Dashboard';

const Admin = () => {

    const [page, setPage] = useState('dashboard');

    return (
        <div className='admin-container'>
            <div className='sidebar'>
                <div className='sidebar-items sidebar-items-top' onClick={() => setPage('dashboard')}>
                    <span>Dashboard</span>
                </div>
                <div className='sidebar-items' onClick={() => setPage('post-upload')}>
                    <span>Post upload</span>
                </div>
                <div className='sidebar-items' onClick={() => setPage('notices-upload')}>
                    <span> Notices upload</span>
                </div>
                <div className='sidebar-items' onClick={() => setPage('approve-registration-forms')}>
                    <span> Approve Registration forms</span>
                </div>
                <div className='sidebar-items ' onClick={() => setPage('change-password')}>
                    <span>Change password</span>
                </div>
            </div>
            <div className='main-page'>
                {
                    page == 'dashboard' &&
                    <Dashboard />
                }
                {page == 'post-upload' &&
                    <div className='post-upload'>
                    Post upload
                </div>
                }
                {
                    page == 'notices-upload' &&
                    <div className='notices-upload'>
                    Notices upload
                </div>
                }
                {
                    page == 'approve-registration-forms' &&
                    <div className='approve-registration-form'>
                    Approve Registration form
                </div>
                }
                {
                    page == 'change-password' &&
                    <div className='change-password'>
                    Change password
                </div>
                }

            </div>
        </div>
    )
}

export default Admin
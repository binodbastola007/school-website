import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {

    const [page, setPage] = useState('dashboard');

    return (
        <div className='admin-container'>
            <div className='sidebar'>
                <div className='sidebar-items'>
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
                <div className='sidebar-items' onClick={() => setPage('change-password')}>
                    <span>Change password</span>
                </div>
            </div>
            <div className='main-page'>
                {
                    page === 'dashboard' &&
                    <div className='admin-dashboard'>
                        Dashboard
                    </div>
                }

                <div className='post-upload'>
                    Post upload
                </div>
                <div className='post-upload'>
                    Notices upload
                </div>
                <div className='post-upload'>
                    Approve Registration form
                </div>
                <div className='post-upload'>
                    Change password
                </div>
            </div>
        </div>
    )
}

export default Admin
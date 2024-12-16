import React, { useState } from 'react';
import './Admin.css';
import Dashboard from './Admin-panel/Dashboard';
import PostForm from './Admin-panel/PostForm';
import NoticesUpload from './Admin-panel/NoticesUpload';
import ChangePassword from './Admin-panel/ChangePassword';
import ApproveRegistration from './Admin-panel/ApproveRegistration';

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
                        <PostForm />
                </div>
                }
                {
                    page == 'notices-upload' &&
                    <div className='notices-upload'>
                            <NoticesUpload />
                </div>
                }
                {
                    page == 'approve-registration-forms' &&
                    <div className='approve-registration-form'>
                            <ApproveRegistration />
                </div>
                }
                {
                    page == 'change-password' &&
                    <div className='change-password'>
                            <ChangePassword />
                </div>
                }

            </div>
        </div>
    )
}

export default Admin
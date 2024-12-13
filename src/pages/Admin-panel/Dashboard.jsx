import React from 'react'

const Dashboard = () => {
    return (
        <div className='admin-dashboard'>
            <h2 style={{ marginLeft: '2rem', marginTop: '0rem' }}>Dashboard</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='message-from-principal'>Message from principal</label>
                <textarea name='message-from-principal' placeholder='Enter message here...' />
            </div>
            <input type='file' />
            <input type='text' />
        </div>
    )
}

export default Dashboard
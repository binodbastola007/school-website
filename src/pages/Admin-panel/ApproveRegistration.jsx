import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './ApproveRegistration.css'; // Import the CSS file

const ApproveRegistration = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [forms, setForms] = useState([
        { id: 1, userId: 'user123', status: 'pending', name: 'John Doe', email: 'john@example.com' },
        { id: 2, userId: 'user456', status: 'pending', name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, userId: 'user789', status: 'pending', name: 'Sam Wilson', email: 'sam@example.com' },
        // Add more mock data here for demonstration
    ]);

    const filteredForms = forms.filter(form =>
        form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        form.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleApprove = (formId) => {
        const updatedForms = forms.map((form) =>
            form.id === formId ? { ...form, status: 'approved' } : form
        );
        setForms(updatedForms);
    };

    const handleView = (formId) => {
        // Logic to view full form details, for example, navigate to a new page or display a modal
        console.log('Viewing form:', formId);
    };

    return (
        <div className="approve-registration-container">
            <h2 className="approve-registration-title">Approve Registration</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="registration-list">
                {filteredForms.map((form) => (
                    <div className="registration-item" key={form.id}>
                        <div className="registration-item-details">
                            <p><strong>Name:</strong> {form.name}</p>
                            <p><strong>Email:</strong> {form.email}</p>
                            <p><strong>Status:</strong> {form.status}</p>
                        </div>
                        <div className="registration-item-actions">
                            <button onClick={() => handleView(form.id)} className="view-button">View</button>
                            {form.status === 'pending' && (
                                <button onClick={() => handleApprove(form.id)} className="approve-button">Approve</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApproveRegistration;

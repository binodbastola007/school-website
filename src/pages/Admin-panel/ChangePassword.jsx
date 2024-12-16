import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useHistory } from 'react-router-dom';
import './ChangePassword.css'; // Import the CSS file

const ChangePassword = () => {
    // const history = useHistory();

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        currentPassword: Yup.string()
            .required('Current password is required')
            .min(8, 'Password must be at least 8 characters'),
        newPassword: Yup.string()
            .required('New password is required')
            .min(8, 'Password must be at least 8 characters')
            .notOneOf([Yup.ref('currentPassword')], 'New password cannot be the same as current password'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        // Simulate API call for password change
        setTimeout(() => {
            alert('Password changed successfully');
            resetForm();
            setSubmitting(false);
            // history.push('/login'); 
        }, 2000);
    };

    return (
        <div className="change-password-container">
            <h2 className="change-password-title">Change Password</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="change-password-form">
                        <div className="change-password-field">
                            <label htmlFor="currentPassword" className="change-password-label">
                                Current Password
                            </label>
                            <Field
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                className="change-password-input"
                            />
                            <ErrorMessage name="currentPassword" component="div" className="change-password-error" />
                        </div>

                        <div className="change-password-field">
                            <label htmlFor="newPassword" className="change-password-label">
                                New Password
                            </label>
                            <Field
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                className="change-password-input"
                            />
                            <ErrorMessage name="newPassword" component="div" className="change-password-error" />
                        </div>

                        <div className="change-password-field">
                            <label htmlFor="confirmPassword" className="change-password-label">
                                Confirm Password
                            </label>
                            <Field
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="change-password-input"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="change-password-error" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="change-password-button"
                        >
                            {isSubmitting ? 'Changing...' : 'Change Password'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePassword;

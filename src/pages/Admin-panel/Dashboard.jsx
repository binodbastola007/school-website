import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
    password: Yup.string().required('Required').min(7, 'Too Short!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),

});

const Dashboard = () => {
    return (
        <div className='admin-dashboard'>
            <h2 style={{ marginLeft: '2rem', marginTop: '0rem' }}>Dashboard</h2>
            <Formik
                initialValues={{
                    principalImage: '',
                    vicePrincipalImage: '',
                    teacherCount: '',
                    studentCount: '',
                    messagePrincipal: '',
                    messageVicePrincipal: '',
                    ourVision: '',
                    ourMission: '',
                    schoolEmail: '',
                    schoolContactNumber: '',
                    schoolLocation: '',
                    faceboolLink: '',
                    schoolLogo: '',

                }}
                // validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}

            >
                {({ errors, touched }) => (
                    <Form className='form-div'>

                        <div style={{ display: 'flex' }}>
                            <input type='file' name='principalImage' />
                            <label htmlFor='principalImage'>Principal Image</label>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <input type='file' name='vicePrincipalImage' />
                            <label htmlFor='principalImage'>Vice Principal Image</label>
                        </div>



                        <div className='fields-container'>
                            <Field name="teacherCount" placeholder="Enter teacher count" />
                            {errors.teacherCount && touched.teacherCount ? (
                                <div className='error-div'>{errors.teacherCount}</div>
                            ) : null}
                        </div>


                        <button className='submit-btn' type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Dashboard
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const SignupSchema = Yup.object().shape({
    Nameofthestudent: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    Grade: Yup.string()
        .min(0, 'Too Short!')
        .max(2, 'Too Long!')
        .required('Grade must be selected'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
    Age: Yup.string().required('Required'),

});

const ApplyNowForm = () => (
    <div className='main-form-container'>

        <div className='form-container'>
            <Formik
                initialValues={{
                    Nameofthestudent: '',
                    Grade: '',
                    address: '',
                    email: '',
                    phone: '',
                    Age: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}

            >
                {({ errors, touched }) => (
                    <Form className='form-div'>

                        <div className='fields-container'>
                            <Field name="Nameofthestudent" placeholder='Name of the student' className='registration-form-fields' />
                            {errors.Nameofthestudent && touched.Nameofthestudent ? (
                                <div className='error-div'>{errors.Nameofthestudent}</div>
                            ) : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="Grade" placeholder=" Select Grade" className='registration-form-fields' />
                            <select>
                                <option>Nursery</option>
                                <option>LKG</option>
                                <option>Class-1</option>
                                <option>Class-2</option>
                                <option>Class-3</option>
                                <option>Class-4</option>
                                <option>Class-5</option>
                                <option>Class-6</option>
                                <option>Class-7</option>
                                <option>Class-8</option>
                                <option>Class-9</option>
                                <option>Class-10</option>
                            </select>
                            {errors.Grade && touched.Grade ? (
                                <div className='error-div'>{errors.Grade}</div>

                            ) : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="address" placeholder="Address" className='registration-form-fields' />
                            {errors.address && touched.address ? (
                                <div className='error-div'>{errors.address}</div>
                            ) : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="email" type="email" placeholder="Email" className='registration-form-fields' />
                            {errors.email && touched.email ? <div className='error-div'>{errors.email}</div> : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="phone" placeholder="Phone number" className='registration-form-fields' />
                            {errors.phone && touched.phone ? <div className='error-div'>{errors.phone}</div> : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="Age" type='password' placeholder="Age" className='registration-form-fields' />
                            {errors.Age && touched.Age ? <div className='error-div'>{errors.Age}</div>
                                : null}
                        </div>

                        <button className='submit-btn' type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    </div>

);

export default ApplyNowForm;
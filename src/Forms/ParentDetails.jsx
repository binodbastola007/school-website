import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const SignupSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is required'),
    Occupation: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Occupation is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    Mobile: Yup.string()
        .matches(/^\d{10}$/, 'Mobile No must be exactly 10 digits')
        .required('Mobile No is required'),
    Transportation: Yup.string().required('Required'),
    text: Yup.string()
        .oneOf([Yup.ref('text'), null], 'text must be Selected')
        .required('Required'),

});

const ParentDetails = () => (
    <div className='main-form-container'>

        <div className='form-container'>
            <h1>PARENTS DETAILS</h1>
            <Formik
                initialValues={{
                    Name: '',
                    Occupation: '',
                    email: '',
                    Mobile: '',
                    Transportation: '',
                    text: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}

            >
                {({ errors, touched }) => (
                    <Form className='form-div'>

                        <div className='fields-container'>
                            <Field name="Name" placeholder='Father/Mother Name' className='registration-form-fields' />
                            {errors.Name && touched.Name ? (
                                <div className='error-div'>{errors.Name}</div>
                            ) : null}
                        </div>

                        <div className='fields-container'>
                            <Field name="Occupation" placeholder="Occupation" className='registration-form-fields' />
                            {errors.Occupation && touched.Occupation ? (
                                <div className='error-div'>{errors.Occupation}</div>
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
                            <Field name="Mobile" placeholder="Mobile No" className='registration-form-fields' />
                            {errors.Mobilehone && touched.Mobile ? <div className='error-div'>{errors.Mobile}</div>
                                : null}
                        </div>
                        &nbsp;
                        <div className='fields-container'><br />
                            <div style={{ flexDirection: 'row' }}> Transportation
                                <Field name="Transportation" type='radio' value='yes'></Field>yes
                                <Field name="Transportation" type='radio' value='No'></Field>No </div>
                            {errors.Transportation && touched.Transportationpassword ? <div className='error-div'>{errors.Transportation}</div>
                                : null}
                        </div>
                        &nbsp;
                        &nbsp;
                        <div className='fields-container'>
                            <Field name="text" type='text'

                                placeholder="How do you come to know about us ?" className='registration-form-fields' />
                            <select onChange={(e) => console.log(e.target.value)}>
                                <option value='social-media'>Social Media</option>
                                <option>Neighbourhood</option>
                                <option>Website</option>
                                <option>Others</option>
                            </select>
                            {errors.text && touched.text ? <div className='error-div'>{errors.text}</div>
                                : null}

                        </div>

                        <button className='submit-btn' type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    </div>

);

export default ParentDetails;
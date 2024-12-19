import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Required'),
});

const LoginForm = () => (
    <div className='school-signin-container'>
        <div className='school-form-container'>
            <h1 className='form-heading'>Teacher login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='form-content'>
                        <div className='form-field-container'>
                            <Field name="email" type="email" placeholder="Email Address" className='input-field' />
                            {errors.email && touched.email ? <div className='error-message'>{errors.email}</div> : null}
                        </div>
                        <div className='form-field-container'>
                            <Field name="password" type='password' placeholder="Password" className='input-field' />
                            {errors.password && touched.password ? <div className='error-message'>{errors.password}</div> : null}
                        </div>
                        <button className='submit-button' type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
);

export default LoginForm;

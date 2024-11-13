import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Required'),

});

const LoginForm = () => (
    <div className='main-form-container'>

        <div className='form-container'>
            <h1>SignIn</h1>
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
                    <Form className='form-div'>

                        <div className='fields-container'>
                            <Field name="email" type="email" placeholder="Email" className='registration-form-fields' />
                            {errors.email && touched.email ? <div className='error-div'>{errors.email}</div> : null}
                        </div>


                        <div className='fields-container'>
                            <Field name="password" type='password' placeholder="Password" className='registration-form-fields' />
                            {errors.password && touched.password ? <div className='error-div'>{errors.password}</div> : null}
                        </div>

                        <button className='submit-btn' type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    </div>

);

export default LoginForm;
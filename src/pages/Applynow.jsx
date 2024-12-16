import React from 'react';
import './Applynow.css';
import ApplyNowForm from '../Forms/ApplyNowForm';
import Parentdetails from '../Forms/ParentDetails';

const Applynow = () => {
    return (
        <>
            <div className='main-applynow'>
                <div className='logo'>
                    <img src='Logos.jpg' alt='preview' /></div>
                <h1 className='h1-title'>श्री कालीदेवी माध्यमिक विधालय <br />
                    Shree Kalidevi Secondary School <br />
                </h1>
            </div>
            <p> Mahankal RM-1,Lalitpur,Nepal<br />
                Tel: 01-4993212/45/67/44<br />
                Email:shreekalidevisecondaryschool@gmail.com<br />
                info:@Kalidevischool.edu.np<br />
                Web: www.Kalidevischool.edu.np <br />
            </p>
            <div className='admission-now'>Admission Now</div>
            <div className='page'>
                <div className='form'>
                    <div>
                        <ApplyNowForm />
                    </div>

                    <div>
                        <Parentdetails />
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Applynow;
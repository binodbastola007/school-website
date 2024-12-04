import React from 'react'
import './Applynow.css';
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
            <div className='applynow'>Apply Now</div>
            <div className='page'>
                <div className='form'>
                    Date &nbsp;
                    <input type='text' placeholder='dd/mm/yyyy' /><br /><br />
                    Name of the Student <br />
                    <input type='text' /><br /><br />
                    Grade &nbsp;
                    <input type='text' />
                    <br /><br />
                    Age &nbsp;
                    <input type='text' /><br /><br />
                    Registration No. &nbsp;
                    <input type='password' /><br />
                    <button className='submit-btn' type="submit">Submit</button>
                </div>

                <div className='applynow'>Parents Details</div>
                <div className='form'>
                    Date &nbsp;
                    <input type='text' placeholder='dd/mm/yyyy' /><br /><br />
                    Name of the Student <br />
                    {/* <input type='text' /><br /><br /> */}
                    <select>
                        <option>Nursery</option>
                        <option>L.K.G</option>
                        <option>U.K.G</option>
                    </select>
                    Grade &nbsp;
                    <input type='text' />
                    <br /><br />
                    Age &nbsp;
                    <input type='text' /><br /><br />
                    Registration No. &nbsp;
                    <input type='password' /><br />
                    <button className='submit-btn' type="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Applynow;
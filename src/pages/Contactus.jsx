import React from 'react'
import './Contactus.css';
import { Button } from 'antd';

const Contactus = () => {
    return (
        <div className="contact-form">
            <p className="md-text-left">Message Us</p>
            <hr />
            <form>
                <div className="input-group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="floating_email">Email address</label>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="message">Write your Message</label>
                </div>
                <div className="grid md-grid-cols-2">
                    <div className="input-group">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="floating_first_name">First name</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="floating_last_name">Last name</label>
                    </div>
                </div>
                <div className="grid md-grid-cols-2">
                    <div className="input-group">
                        <input
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="floating_phone">Phone number</label>
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Contactus
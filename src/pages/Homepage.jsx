import React, { useEffect } from 'react';
import ReadmoreButton from '../Components/ReadmoreButton';
import CarouselHome from '../Components/CarousalHome';
import CountUp from 'react-countup';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Homepage = () => {

    fetch('http://localhost:5000')
        .then((response) => {
            return response.json(); // Assuming the server returns JSON
        })
        .then((data) => {
            console.log("Data fetched successfully:", data);
        })
        .catch((error) => {
            console.error("Failed to fetch:", error);
        });



    return (
        <div className='homepage-container'>
            <div>
                <CarouselHome />
            </div>

            <div className='school-analytics'>
                <span className='info'>
                    <CountUp start={0} end={23} duration={3} />+ proffesional teachers
                </span>
                <span className='info'>
                    Updated Courses
                </span>
                <span className='info'>
                    <CountUp start={0} end={500} duration={3} />+ registered student
                </span>
            </div>

            <div className='posts-container'>
                <div className='posts'>
                    <span className='title-post'>
                    Latest Posts
                    </span>
                    <div >
                    <div>
                        <img src='/post1.jpg' alt='preview' className='post-img' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post2.jpg' alt='preview' className='post-img' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post3.jpg' alt='preview' className='post-img' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post4.jpg' alt='preview' className='post-img' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        <ReadmoreButton />
                    </div>
                </div>
                </div>
                <div className='posts-sidediv'>
                    <div>
                        <span className='why-us-text'>Why us?</span>
                        <p>     Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='intro-div'>
                        <h1 className='homepage-intro'>
                            Introduction
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <div className='message-div-principal'>
                            <span>Message from principal</span>
                            <img src='/profile.png' alt='preview' />
                            <p>           Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='message-div-principal'>
                            <span>Message from vice principal</span>
                            <img src='/profile.png' alt='preview' />
                            <p>           Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='vision-mission-div'>
                <div >
                    <h1 className='title-vision-mission'>Our vision</h1>
                    <div className='vision-div' s>
                    <img src='/vision.jpg' className='animated-image' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.s
                        </p>
                    </div>


                </div>
                <div>
                    <h1 className='title-vision-mission'>Our mission</h1>
                    <div className='mission-div'>
                    <img src='/mission.jpg' className='animated-image' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.s
                        </p>
                    </div>

                </div>
            </div>

            <div className='quick-links'>
                <div className='footer-logo'>
                    logo
                </div>
                <div className='footer-contactus'>
                    <div>Contact us</div>
                    <ul>
                        <li><MdEmail /> shangrilainternation@gmail.com</li>
                        <li><FaPhoneSquareAlt />+977-9812345678 / 01-657847</li>
                        <li> <IoLocationSharp />Chapagaun,Lalitpur</li>
                    </ul>
                </div>
                <div className='footer-quicklinks'>
                    <div>Quick links</div>
                    <ul>
                        <li>Facebook page link</li>
                        <li>Instagram page link</li>
                        <li>Tweeter page link</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Homepage
import React, { useEffect } from 'react';
import ReadmoreButton from '../Components/ReadmoreButton';
import CarouselHome from '../Components/CarousalHome';
import CountUp from 'react-countup';

const Homepage = () => {


    return (
        <>
            <div>
                {/* <img src='/school1.jpg' alt='preview' className='carousal-img' /> */}
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
                <div>
                    <h2>Our vision</h2>
                    <p>
                        dfasfdsaf fdsa fasdf fdsaf fdsafasfd asfdasdfsdfasd
                        sdfasdf as dfsaasdfsad  fsdfasdf  fasdafsaf asfdasdf asfdasdf
                        dfdasfdsa fasdfsadf afdsasdf asfsad fasdf asdfasf  sda fasdf
                    </p>
                </div>
                <div>
                    <h2>Our mission</h2>
                    <p>
                        dfasfdsaf fdsa fasdf fdsaf fdsafasfd asfdasdfsdfasd
                        sdfasdf as dfsaasdfsad  fsdfasdf  fasdafsaf asfdasdf asfdasdf
                        dfdasfdsa fasdfsadf afdsasdf asfsad fasdf asdfasf  sda fasdf
                    </p>
                </div>

            </div>

            <div>
                <div className='footer-logo'>
                    logo
                </div>
                <div>
                    Contact us
                </div>
                <div>
                    Quick links
                </div>
            </div>

        </>
    )
}

export default Homepage
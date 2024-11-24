import React, { useEffect } from 'react'
import ReadmoreButton from '../Components/ReadmoreButton'

const Homepage = () => {

    function animateCounter(element, totalCount, duration) {
        let current = 1;
        const interval = duration / totalCount;

        const counterInterval = setInterval(() => {
            element.textContent = current;
            current++;

            if (current > totalCount) {
                clearInterval(counterInterval);
            }
        }, interval);
    }

    useEffect(() => {
        const totalStudents = document.getElementById('total-students');
        const excellence = document.getElementById('excellence');
        const totalTeachers = document.getElementById('total-teachers');

        if (totalStudents && excellence && totalTeachers) {
            animateCounter(totalStudents, 500, 3000);
            animateCounter(excellence, 15, 3000);
            animateCounter(totalTeachers, 23, 3000);
        }
    }, []);

    return (
        <>
            <div>
                <img src='/school1.jpg' alt='preview' className='carousal-img' />
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
                <div className='post-sidediv'>
                    <span id='total-students'></span>
                    <span id='excellence'></span>
                    <span id='total-teachers'></span>
                </div>
            </div>

        </>
    )
}

export default Homepage
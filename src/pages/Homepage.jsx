import React from 'react'
import ReadmoreButton from '../Components/ReadmoreButton'

const Homepage = () => {
    return (
        <>
            <div>
                <img src='/school1.jpg' alt='preview' className='carousal-img' />
            </div>
            <div>
                <span>
                    Latest Posts
                </span>
                <div>
                    <div>
                        <img src='/post1.jpg' alt='preview' className='post-img' />
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post2.jpg' alt='preview' className='post-img' />
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post3.jpg' alt='preview' className='post-img' />
                        <ReadmoreButton />
                    </div>
                    <div>
                        <img src='/post4.jpg' alt='preview' className='post-img' />
                        <ReadmoreButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
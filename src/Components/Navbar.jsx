import React from 'react'
import NavItem from './Dropdown'
import './Components.css'
import ProfileIcon from './ProfileIcon'


const menuItems = [
    { title: 'Home', value: [] },
    { title: 'About us', value: [] },
    { title: 'Contact us', value: [] },
    { title: 'Gallery', value: [] },
    { title: 'Notices', value: [] },
    {
        title: "Teacher's guide",
        value: [
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
                key: '0',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                ),
                key: '1',
            },
            {
                label: '3rd menu item',
                key: '3',
                disabled: false,
            },
        ]
    },
    { title: 'Apply now', value: [] },

]

const Navbar = () => {


    return (
        <div className='nav-container'>
            <div className='items-container'>
                <div className='logo-div'>
                    <img src='/schoollogo.png' className='logo-img' />
                </div>
                {menuItems?.map((items) => {
                    return (<>
                        <div className='nav-items'>
                            <NavItem title={items.title} items={items.value} />
                        </div>
                    </>)
                })}
            </div>

            <div className='profile-icon'>
                <ProfileIcon />
            </div>
        </div>
    )
}

export default Navbar
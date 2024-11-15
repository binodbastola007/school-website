import React from 'react'
import NavItem from './Dropdown'
import './Components.css'
import ProfileIcon from './ProfileIcon'

const menuItems = [
    { title: 'Home', value: [] },
    { title: 'About us', value: [] },
    { title: 'Contact us', value: [] },
    { title: 'Events', value: [] },
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
                type: 'divider',
            },
            {
                label: '3rd menu item（disabled）',
                key: '3',
                disabled: true,
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
                    <img src='/logo192.png' className='logo-img' />
                </div>
                {menuItems.map((items) => {
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
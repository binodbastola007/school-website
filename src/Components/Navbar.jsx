import React from 'react';
import NavItem from './Dropdown';
import './Components.css';
import ProfileIcon from './ProfileIcon';

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
        ],
    },
    { title: 'Apply now', value: [] },
];

const Navbar = () => {
    return (
        <div className="nav-container">
            {/* Logo Section */}
            <div className="logo-div">
                <img src="/schoollogo.png" className="logo-img" alt="Logo" />
                <h1 className="logo-title">Your School</h1>
            </div>

            {/* Menu Items */}
            <div className="items-container">
                {menuItems.map((item, index) => (
                    <div key={index} className="nav-items">
                        <NavItem title={item.title} items={item.value} />
                    </div>
                ))}
            </div>

            {/* Profile Icon */}
            <div className="profile-icon">
                <ProfileIcon />
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom'

const NavItem = ({ title, items }) => {

    const navigate = useNavigate();

    const handleNavItemClick = (title) => {

        if (title == 'Home') {
            navigate('/');
        }
        else if (title == 'About us') {
            navigate('/aboutus')
        } else {
            return;
        }
    }


    return (
    <Dropdown
        menu={{
            items,
        }}
    >
            <a onClick={() => handleNavItemClick(title)}>
                <Space className='title'>
                {title}
                {items?.length > 0 && <DownOutlined />}
            </Space>
        </a>
    </Dropdown>
);
}
export default NavItem;
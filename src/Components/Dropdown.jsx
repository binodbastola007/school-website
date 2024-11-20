import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const NavItem = ({ title, items }) => {



    const handleNavItemClick = () => {
        alert('popup')
    }


    return (
    <Dropdown
        menu={{
            items,
        }}
    >
            <a onClick={handleNavItemClick}>
            <Space>
                {title}
                {items?.length > 0 && <DownOutlined />}
            </Space>
        </a>
    </Dropdown>
);
}
export default NavItem;
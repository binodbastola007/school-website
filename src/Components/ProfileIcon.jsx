import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';


const ProfileIcon = () => {

    const handleMenuClick = (e) => {
        if (e.key == '1') {
            navigate('/admin/login')
        }
    };
    const items = [
        {
            label: 'Admin login',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Logout',
            key: '2',
            icon: <UserOutlined />,
            disabled: false,
            danger: true,
        },

    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const navigate = useNavigate();

    return (
    <Space>
            <Dropdown.Button menu={menuProps}>
            <UserOutlined />
        </Dropdown.Button>
    </Space>
);

}
export default ProfileIcon;
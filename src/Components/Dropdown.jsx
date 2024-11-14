import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const NavItem = ({ title, items }) => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {title}
                {items?.length > 0 && <DownOutlined />}
            </Space>
        </a>
    </Dropdown>
);
export default NavItem;
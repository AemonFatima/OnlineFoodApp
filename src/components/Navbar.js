import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/cart">Cart</Link>
      </Menu.Item>
      {/* Add more menu items as needed */}
    </Menu>
  );
};

export default Navbar;

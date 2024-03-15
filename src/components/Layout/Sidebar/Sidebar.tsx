import React, { useEffect, useState } from 'react';
import { Nav, NavItem, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css'; 

const SideBar: React.FC = () => {
  const navigate  = useNavigate();
  const [activeKey, setActiveKey] = useState<string>('/');

  const handleItemClick = (key: string) => {
    navigate(key);
    setActiveKey(key);
  };

  // Define an array of menu items
  const menuItems = [
    { title: 'Dashboard', path: '/' },
    { title: 'Reports', path: '/reports' },
    // Add more menu items as needed
  ];

  return (
    <Col sm={2} className={`${styles.sidebar} d-flex flex-column `}>
      <Nav
        defaultActiveKey={activeKey}
        className="flex-column flex-grow-1 mt-1"
      >
        {menuItems.map((menuItem, index) => (
          <NavItem  onClick={() => handleItemClick(menuItem.path)} key={index} className={`${styles.navItem} ${activeKey === menuItem.path ? styles.active : ''} text-center p-3`}>
              {menuItem.title}
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default SideBar;

import React, { useEffect, useState } from 'react';
import { Nav, NavItem} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css'; 
import BarChartIcon from '@mui/icons-material/BarChart';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const SideBar: React.FC = () => {
  const sidebarCollapsed = useSelector((state: RootState) => state.layout.sidebarCollapsed);
  const navigate  = useNavigate();
  const [activeKey, setActiveKey] = useState<string>('/');
 

  const handleItemClick = (key: string) => {
    navigate(key);
    setActiveKey(key);
  };

  // Define an array of menu items
  const menuItems = [
    { title: 'Dashboard', path: '/', icon: <BarChartIcon /> },
    { title: 'Reports', path: '/reports',icon : "" },
    // Add more menu items as needed
  ];

  return (
    <div className={`${styles.sidebar} d-flex flex-column `}>
      <Nav
        defaultActiveKey={activeKey}
        className="flex-column flex-grow-1 mt-1"
      >
        {menuItems.map((menuItem, index) => (
          <NavItem  onClick={() => handleItemClick(menuItem.path)} key={index} className={`${styles.navItem} ${activeKey === menuItem.path ? styles.active : ''} text-center p-3`}>
            {menuItem.icon}  { !sidebarCollapsed && menuItem.title}
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default SideBar;

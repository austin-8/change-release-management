import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux'; 
import { toggleSidebar } from '../../../redux/layoutReducer';
import icon from "../../../assets/images/Uniliver Logo.svg"
import { Grid } from '@mui/material';

const Header: React.FC = () => {
  const dispatch = useDispatch(); 

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar()); 
  };

  return (
    
          <Navbar bg="dark" expand="lg" variant="dark" className='sticky-top'>
           <Grid container className={'m-1'}>
                <Grid item lg={2} xs={4}>
                  <div className={styles.logoBox}>
                        <img src={icon} alt="C&RM" className={`${styles.logo}`} /> 
                  </div>
                </Grid>
                <Grid item lg={10} xs={8} className={`d-flex ${styles.hamburgerBox}`}>
                    <FiMenu className={styles.hamburger} onClick={handleToggleSidebar}/>
                </Grid>
            </Grid>
        </Navbar>
      
  
  );
};

export default Header;

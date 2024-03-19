import React, { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Box, Drawer, Grid } from '@mui/material';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const PortalLayout: React.FC  = () => {
  const sidebarCollapsed = useSelector((state: RootState) => state.layout.sidebarCollapsed);
  return (
    <Box>
       <Header />
        <Grid container >
          <Grid item lg={sidebarCollapsed ? 0.7 : 2} md={sidebarCollapsed ? 1 : 2} sx={{display: {lg: 'grid' ,xs: 'none'}}}>
              <Sidebar />
          </Grid>
          <Grid item lg={sidebarCollapsed ? 11.3 : 10} md={sidebarCollapsed ? 11 : 10} xs={12}>
              <Content /> 
          </Grid>
        </Grid>
        {/* <Drawer sx={{width:'100%'}} open={sidebarCollapsed}>
          <Sidebar />
        </Drawer> */}
    </Box>
  );
};

export default PortalLayout;

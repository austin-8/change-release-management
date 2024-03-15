import React, { ReactNode } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content';


const PortalLayout: React.FC  = () => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row>
          <Sidebar />
          <Content />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PortalLayout;

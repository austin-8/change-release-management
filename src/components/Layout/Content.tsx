import React, {ReactNode} from 'react';
import { Col } from 'react-bootstrap';
import PortalRoutes from '../../routes/PortalRoutes';


const Content:  React.FC = () => {
  return (
    <Col sm={10} style={{background:'#dddddd',height: 'calc(100vh - 90px)',overflowY: 'auto'}}>
      {/* <h2 className='mt-2 mb-3'>Dashboard</h2> */}
      <PortalRoutes />
    </Col>
  );
};

export default Content;

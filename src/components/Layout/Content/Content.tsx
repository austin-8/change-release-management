import React, {ReactNode} from 'react';
import { Col } from 'react-bootstrap';
import PortalRoutes from '../../../routes/PortalRoutes';


const Content:  React.FC = () => {
  return (
    <div className="py-2 px-3" style={{background:'#dddddd',height: '100vh',overflowY: 'auto'}}>
      <PortalRoutes />
    </div>
  );
};

export default Content;

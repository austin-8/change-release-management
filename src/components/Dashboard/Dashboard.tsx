import React from "react";
import { Row, Col } from "react-bootstrap";
import CountCard from "../Common/CountCard";
import Type from "./Type";
import Status from "./Status";
import NewChanges from "./NewChanges";
import ServiceOfferning from "./ServiceOffering";
import data from '../../data/data.json'

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="mt-2">
        <Col xs={5}>
          <Row>
            <Col xs={6}>
              <CountCard title={"Total Changes"} count={data.length} />
            </Col>
            <Col xs={6}>
              <CountCard title={"Delayed Changes"} count={22} />
            </Col>
            <Col xs={12} className="mt-3">
               <NewChanges />
            </Col>
          </Row>
        </Col>
        <Col xs={7}>
          <ServiceOfferning />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={4}>
          <Type />
        </Col>
        <Col xs={4}>
          <Status />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;

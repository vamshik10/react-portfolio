import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  services,
} from "../../content_option";

export const Education = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Education | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Education</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">B.E., VTU (Pursuing)</h3>
          </Col>
          <Col lg="7">
                <div className="service_ py-4">
                  <h5 className="service__title">Bangalore Institute Of Technology</h5>
                  <p className="service_desc">2020-2024</p>
                </div> 
          </Col>
          {/* </Row>
        <Row className="sec_sp"> */}
        <div></div>
        <Col lang="5">
            <h3 className="color_sec py-4">Pre-university, Karnataka</h3>
          </Col>
          <Col lg="7">
                <div className="service_ py-4">
                  <h5 className="service__title">Sri Kumaran Composite Junior College</h5>
                  <p className="service_desc">2017-2019</p>
                </div> 
          </Col>
          <div></div>
        <Col lang="5">
            <h3 className="color_sec py-4">10th Standard</h3>
          </Col>
          <Col lg="7">
                <div className="service_ py-4">
                  <h5 className="service__title">DPS Bangalore South</h5>
                  <p className="service_desc">2016</p>
                </div> 
          </Col>
          </Row>
      </Container>
    </HelmetProvider>
  );
};

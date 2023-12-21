import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, services } from "../../content_option";
import img1 from "../../assets/images/scene1.png";
import img2 from "../../assets/images/scene2.png";
import img3 from "../../assets/images/scene3.png";

export const Hobbies = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hobbies | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Hobbies</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Biking</h3>
          </Col>
          {/* </Row>
        <Row className="sec_sp"> */}
          <img src={img2} alt="..." />
          <img src={img1} alt="..." width={"50%"} />
          <div></div>
          <Col lang="5">
            <h3 className="color_sec py-4">Trekking</h3>
          </Col>
          <div></div>
          <Col lang="5">
            <h3 className="color_sec py-4">Swimming</h3>
          </Col>
          <div></div>
          <Col lang="5">
            <h3 className="color_sec py-4">Cooking</h3>
          </Col>
          <div></div>
          <Col lang="5">
            <h3 className="color_sec py-4">Listining to music</h3>
            <img src={img3} alt="..." />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

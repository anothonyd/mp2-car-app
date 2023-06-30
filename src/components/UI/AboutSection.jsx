import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/car-display-img/hero.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section_title">Welcome to car rent service</h2>
              <p className="section__description">
              KOTSE DEAL SERVICE was established in 2023 pioneering in car rental of our vehicles. Our showrooms are one of the biggest in Quezon City and Marikina City, we are the most reliable and trusted in buying and selling quality used vehicles. Our first showroom was located at Riverbanks Marikina and seeing the opportunity to expand and serve more customers, our main branch is located at Kotse Network Quezon Ave in QC, further strengthening our foothold as a leader in pre-owned car rental. At present, other satellite showrooms are existing at Kotse Network Barangka and Gil Fernando in Marikina.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Comfortable and security afety
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Affordable price to rent.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 100% money back guaranteed.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Secure Payment.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

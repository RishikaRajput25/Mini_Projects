import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          {/* Contact Information */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 12345 67890</p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com/yourprofile" className="text-light me-2" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/yourprofile" className="text-light me-2" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-light" aria-label="LinkedIn">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

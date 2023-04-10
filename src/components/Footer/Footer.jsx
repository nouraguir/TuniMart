import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'

const Footer = () => {
  const year= new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'> 
          <div className='logo'>
            <div>
              <h1 className='text-white'>TuniMart</h1>
            </div>
          </div>
          <p className='footer__text mt-4'>Thank you for shopping with us!
          <br></br> At TuniMart, we are committed to providing you with the best selection of high-quality tech products at competitive prices. We hope that you are satisfied with your purchase and that our products exceed your expectations. If you have any questions or concerns, please do not hesitate to contact our customer service team. We appreciate your business and look forward to serving you again in the future.</p>
          </Col>


          <Col lg='3' md='3' className='mb-4'> <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup className='footer__contact' >
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Mobile Phones
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Smart Watches
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Wireless Headphones
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Modems
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='2'md='3'  className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup  className='footer__contact'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>
                    Shop
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='/cart'>
                    Cart
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>
                    Login
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Privacy Policy
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>


          <Col lg='3' md='3'> 
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to='#'>
                  <span><i class="ri-map-pin-line"></i>
                  <p>Monastir, 5000</p></span>
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to='#'>
                    <span>
                    <i class="ri-phone-line"></i>
                    <p>+21698723888</p>
                    </span>
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to='#'>
                  <span>
                  <i class="ri-mail-line"></i>
                  <p>nouaaguir@gmail.com</p>
                  </span>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>


          <Col lg='12' className='mb-4'>
            <p className='footer__copyright'>
            Copyright {year} developed by Nour Aguir.<br></br> All rights reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
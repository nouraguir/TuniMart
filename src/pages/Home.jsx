import React  from 'react';
import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col, Button} from 'reactstrap';
import '../styles/home.css'
import heroImg from '../assets/images/phone.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products'
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/wireless-01.png'
import Clock from '../components/UI/Clock';

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filterdTrendingProducts = products.filter(
      (item) =>item.category === 'mobile');
  
    const filterdBestSalesProducts = products.filter(
        (item) =>item.category === 'mobile');

    const filterdMobileProducts = products.filter(
          (item) =>item.category === 'mobile');

    const filterdWirelessProducts = products.filter(
            (item) =>item.category === 'wireless');

   const filterdPopularProducts = products.filter(
            (item) =>item.category === 'watch');


    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setPopularProducts(filterdPopularProducts);


},[]); 

  return (  
  <Helmet title={'Home'}>
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero__content'>
            <p className='hero__subtitle'>Trending Products in {year} </p>
            <h2>Have New & Modern Products</h2>
            <p>"Tech Your Pick: Discover the Latest and Greatest in Tech Products<br></br>  Your One-Stop E-Commerce Shop for Tech Enthusiasts!"</p>
            <motion.button whileTap={{scale: 1.2}} className='shop__btn'><Link to='/Shop'>SHOP NOW</Link></motion.button>
          </div>
        </Col>
        <Col lg='6' md='6'>
        <div className='hero__img'>
          <img src={heroImg} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
    </section>

    <Services />
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className='best__sales'>
      <Container>
      <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>

          <div className='clock__top-content'>
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Products</h3>
          </div>
            <Clock />

            <motion.button whileTap={{scale : 1.2}} className=' buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>

          <Col lg='6' md='6' className='text-end counter__img'>
              <img src={counterImg} alt=""></img>
          </Col>
          <ProductsList />
        </Row>
      </Container>
    </section>

    <section className='new__arrivals'>
    <Container>
      <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>


    <section className='popular__category'>
    <Container>
      <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section__title'>Popular in Category</h2>
          </Col>
            <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
  );
};


export default Home
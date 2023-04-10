import React from "react";
import { Container, Col, Row } from "reactstrap";
import '../styles/dashboard.css';
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const {data: products} = useGetData('products');
  const {data: users} = useGetData('users');

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>700 TND</span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="order__box">
                <h5>Orders</h5>
                <span>2 </span>
              </div>
            </Col>

            <Col className="lg-3">
            <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length} </span>
              </div>
            </Col> 
            <Col className="lg-3">
            <div className="users__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
         
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import { Card, Row, Col, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title } = Typography;

const Landing = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Our Products</Title>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />}
              actions={[
                <Link to={`/product/${product.id}`}>
                  <Button type="primary">View Details</Button>
                </Link>
              ]}
            >
              <Meta title={product.title} description={`$${product.price}`} />
              <p style={{ marginTop: '10px' }}>{product.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Landing;

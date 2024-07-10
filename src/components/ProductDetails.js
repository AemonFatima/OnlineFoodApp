import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions';
import { Card, Button } from 'antd';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate('/cart');  // Navigate to the cart page after adding to cart
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Card title={product.title}>
      <p>{product.description}</p>
      <Button type="primary" onClick={handleAddToCart}>Add to Cart</Button>
    </Card>
  );
};

export default ProductDetails;

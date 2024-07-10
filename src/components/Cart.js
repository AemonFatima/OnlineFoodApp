import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/actions/cartActions';
import { Table, Button } from 'antd';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <>
          <Button onClick={() => dispatch(decreaseQuantity(record.id))}>-</Button>
          <span>{record.quantity}</span>
          <Button onClick={() => dispatch(increaseQuantity(record.id))}>+</Button>
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button onClick={() => dispatch(removeFromCart(record.id))}>Remove</Button>
      )
    }
  ];

  return (
    <Table dataSource={cartItems} columns={columns} rowKey="id" />
  );
};

export default Cart;

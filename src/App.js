import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Landing from './components/Landing';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Layout>
        <Header>Food App</Header>
        <Content style={{ padding: '20px' }}>
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Landing />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;

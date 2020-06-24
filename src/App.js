import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CartContextProvider from './context/CartContext';
import AuthContextProvider from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/page-not-found/PageNotFound';

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Layout>
          <Switch>
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/contact" component={Contact} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/profile" component={Profile} />
            <Route path="/" exact component={Home} />
            <Redirect to="/page-not-found" />
          </Switch>
        </Layout>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;

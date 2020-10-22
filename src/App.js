import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute, IsUserRedirect } from './utils/routes/routes';
import { ToastContainer } from 'react-toastify';
import CartContextProvider from './context/CartContext';
import AuthContextProvider from './context/AuthContext';
import useAuthListener from './hooks/useAuthListener';

import Layout from './components/Layout';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import PageNotFound from './pages/page-not-found/PageNotFound';

import * as ROUTES from './constants/routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const user = useAuthListener();

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ToastContainer />
        <Layout>
          <Switch>
            <Route path={ROUTES.NOT_FOUND} component={PageNotFound} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route path={ROUTES.MENU} component={Menu} />
            <Route path={ROUTES.CART} component={Cart} />
            <Route path={ROUTES.ORDER} component={Order} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.HOME} exact component={Home} />

            <IsUserRedirect user={user} loggedInPath={ROUTES.PROFILE} path={ROUTES.LOGIN}>
              <Login />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.PROFILE}>
              <Profile user={user} />
            </ProtectedRoute>

            <Redirect to={ROUTES.NOT_FOUND} />
          </Switch>
        </Layout>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;

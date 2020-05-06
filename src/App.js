import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import PageNotFound from './pages/page-not-found/PageNotFound'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/page-not-found" component={PageNotFound} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/" exact component={Home} />
          <Redirect to="/page-not-found" />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;

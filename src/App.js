import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import About from './views/About';
import Farm from './views/Farm';
import Abolition from './views/Abolition';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/farm" component={Farm} layout={LayoutDefault} />
          <AppRoute exact path="/abolition" component={Abolition} layout={LayoutDefault} />
        </Switch>
      )} />
      </PayPalScriptProvider>
  );
}

export default App;
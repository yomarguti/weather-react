import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Help from './Pages/Help';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

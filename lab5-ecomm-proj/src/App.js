import React from 'react';
import './App.css';
import { HomePage } from './Pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = ()=>(
  <div>
    <h1> HATS</h1>
  </div>
);

const JacketsPage = ()=>(
  <div>
    <h1> JACKETS</h1>
  </div>
);

const SneakersPage = ()=>(
  <div>
    <h1> SNEAKERS</h1>
  </div>
);

const WomenPage = ()=>(
  <div>
    <h1> WOMEN</h1>
  </div>
);

const MENPage = ()=>(
  <div>
    <h1> MEN</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route path='/shop/jackets' component={JacketsPage} />
      <Route path='/shop/sneakers' component={SneakersPage} />
      <Route path='/shop/women' component={WomenPage} />
      <Route path='/shop/men' component={MENPage} />
      </Switch>
    </div>
  );
}

export default App;

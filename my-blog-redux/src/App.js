import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home';
import Posts from './components/Posts';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <div className='MainSectionMargin'>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/posts" component={Posts} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>

        <Footer/>
      </div>
    </BrowserRouter> 
  );
}


export default App;

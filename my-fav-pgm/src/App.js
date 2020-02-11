import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Programs from './Programs/Programs';
import Channels from './Channels/Channels';
import TrendingShows from './TrendingShows/TrendingShows';
import MyProfile from './MyProfile/MyProfile';
import Subscribe from './Subscribe/Subscribe';
import Renew from './Renew/Renew';
import AnnualSubscription from './Subscribe/AnnualSubscription';

// this is App Component -- do the Layout 
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container MainSectionMargin">
        <div className='row'>
          <Programs />
        </div>

        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <h2>List of TV Channels | State Example</h2>
          </div>
          <Channels />
        </div>

        <hr />

        <div className='row'>
          <div className='col-md-12'>
            <h2>Trending TV Shows | List and Keys Example</h2>
          </div>
          <TrendingShows />
        </div>

        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <h2>My Profile | Two Way Binding Example</h2>
          </div>
          <MyProfile age='20' />
        </div>


        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <h2>My Subscription | Inline Styling Example</h2>
          </div>
          <Subscribe date='Sep 15, 2020'/>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <h2>Renew Subscription | Events Example</h2>
            <br />
            <Renew />
          </div>

          <AnnualSubscription />
        </div>



        <br />
        <br />
        <br />
        <br />
        <br /><br /><br /><br /><br />
      </div>
      <Footer />
    </div>
  );
}

export default App;

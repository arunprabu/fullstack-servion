import React, { Component } from 'react';

class TrendingShows extends Component{

  state = {
    showsList: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
      { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ]
  };

  
  updateWatchListHandler = (id) =>{
    console.log(id);

    //you need to find out the exact id and then change isInWatchList: true
    //task for participants to find the right id and update the button label as 'In Watchlist'
    //also implement a logic to remove from watch list 
    this.setState({
        showsList: [
          { id: 1, name: 'The Planet Earth', host: 'David Attenborough', 
          isInWatchList: true},
          { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', 
          isInWatchList: false},
          { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', 
          isInWatchList: false},
          { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', 
          isInWatchList: false}
        ]
    });
    
  }

  render() {
    
    let shows = null; 
    if(this.state.showsList && this.state.showsList.length > 0 ){

      // loop thru using es2015's map 
      shows = this.state.showsList.map( (show, index) => {
        return(
          <li key={show.id} className='list-group-item'>
            #{show.id}. {show.name} - hosted by {show.host}

            <button type="button" 
              className="btn btn-primary btn-sm float-right"
              onClick={this.updateWatchListHandler.bind(this, show.id)}>
                { show.isInWatchList? 'In Watchlist': 'Not in Watchlist' }
            </button>
          </li>
        )
      });
    }

    return (
      <div>
        <ul className="list-group">
            { shows }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;

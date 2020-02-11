import React, { Component } from 'react'
import Channel from './Channel';

class Channels extends Component{
  // state is to keep component's data
  state = {
    channelList: [
      { id:1, name: 'Star Sports!', desc: 'sports channel'},
      { id:2, name: 'HBO', desc: 'movie channel'},
      { id:3, name: 'AXN', desc: 'adventure channel'},
      { id:4, name: 'NatGeo', desc: 'infotainement channel'}
    ]
  }

  addToFavoriteHandler = (id) => {
    console.log('clicked', id);
    this.setState({
      channelList: [
        { id:1, name: '[Added]:Star Sports!', desc: 'sports channel'},
        { id:2, name: 'HBO', desc: 'movie channel'},
        { id:3, name: 'AXN', desc: 'adventure channel'},
        { id:4, name: 'NatGeo', desc: 'infotainement channel'}
      ]
    });
  }


  render(){
    console.log('Inside Render');

    return(
      <React.Fragment>
        <Channel
          id={this.state.channelList[0].id} 
          name={this.state.channelList[0].name} 
          desc={this.state.channelList[0].desc} 
          img='star.png' 
          action={this.addToFavoriteHandler.bind(this, this.state.channelList[0].id)}/>

        <Channel 
          id={this.state.channelList[1].id} 
          name={this.state.channelList[1].name} 
          desc={this.state.channelList[1].desc} 
          img='hbo.png'/>
      </React.Fragment>
    );  
  }

}

export default Channels;
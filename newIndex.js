import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import MenuHeaderItem from './components/MenuHeaderItem';
import LinksItem from './components/LinksItem';
import Stars from './components/Stars';
import Clock from './components/Clock';
import Image from './components/Image';
import './style.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      header: null
    };

    this.clickControl = this.clickControl.bind(this)
  }

  clickControl(clickedElement){

    function openURL(url) {
    
      var win = window.open(url, '_blank');
      
      win.focus();
    } 
  }  

  render() {

    return (

      /* background stars and big main header(Hello/) */
      <div className= "theApp">
        <div className= "b-ground">
          <Stars/>
        </div>
        <div>
        /* main header "amorcitos"*/
          <Hello/>
        </div>
        <br/>
        <div>
          <center>
            { /* to center map all headers */ }
            { 
              this.state.headers.map(headerMade => {
                return (
                  <MenuHeaderItem
                  key ={headerMade.id}
                  title={headerMade}
                  handleClick={this.clickControl}/>
                );
              })
            }
               <br/> <br/> <br/>  
            { /* section where comes stuff with centerPage variable */ }
            {centerPage} 
          </center>
        </div>
      </div>
    );
  }
}
/*
render(<App />, document.getElementById('root'));
*/
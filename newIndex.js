import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import MenuHeaderItem from './components/MenuHeaderItem';
import LinksItem from './components/LinksItem';
import Stars from './components/Stars';
import Clock from './components/Clock';
import Image from './components/Image';
import './style.css';
import { mainHeaders } from './arrays/arrays.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedMenu: null
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
    /* if selectedMenu is null, make clock and image*/
    
    return (

      /* background stars  */
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
            { /* to center: map all headers for top menu*/ }
            { 
              mainHeaders.map(headerMade => {
                return (
                  <MenuHeaderItem
                  key ={headerMade.name}
                  title={headerMade.name}
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
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import MenuHeaderItem from './components/MenuHeaderItem';
import LinksSection from './components/LinksSection';
import Stars from './components/Stars';
import './style.css';
import { mainHeaders } from './arrays/arrays.js';
import { makeLinkMenu } from './functions/helpFunctions.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedMenu: 'not selected'
    };
/*
    this.clickControl = this.clickControl.bind(this)
 */
  }
/*
  clickControl(clickedElement){
    console.log('cE ', clickedElement);
    this.setState({ selectedMenu: clickedElement});
    function openURL(url) {
    
      var win = window.open(url, '_blank');
      
      win.focus();
    } 
  }  
  */

  render() {

    return (

      <div className= "theApp">

        /* background stars  */
        <div className= "b-ground">
          <Stars/>
        </div>

        <div>
        /* main header "amorcitos"*/
          <Hello/>
        </div>
        
        { /* center section of page*/ }
        <div>
          <center>
            { /* upper link bar */
              mainHeaders.map(theHeader => {
                return (
                  <MenuHeaderItem
                  key ={theHeader.name}
                  title={theHeader.name}
                  handleClick={this.clickControl}
                  />
                );
              })
            }
               <br/> <br/> <br/> 

            { /* section where comes stuff with centerPage variable */ }
            <LinksSection 
            selected= {this.state.selectedMenu}
            arrays = {mainHeaders}
            /> 
          </center>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

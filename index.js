import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MenuHeaderItem from './MenuHeaderItem';
import LinksItem from './LinksItem';
import Stars from './Stars';
import Clock from './Clock';
import './style.css';

class App extends Component {

  constructor() {
    
    super();

    this.state = {

      headers: ["Entertainment","Social media","News and weather", "Educational"],
      enLinks: ['Diario', 'Calendar', 'Netflix', 'Youtube', 'Batmud', 'Batwiki', 'Maps by Ggr', 'Age of exile maps', 'Weapon compare table', 'Reinc simulator', 'Radio planeta'],
      soLinks: ['Facebook', 'Gmail', 'Youtube'],
      neLinks: ['El comercio', 'Yle', 'Foreca', 'Peru 21'],
      edLinks: ['Duolingo', 'Stackblitz', 'Glitch', 'GitHub', 'FreeCodeCamp'],
      shows: "0000"

    };

    this.clickControl = this.clickControl.bind(this)

  }

  clickControl(todo){

    function openURL(url) {
    
      var win = window.open(url, '_blank');
      
      win.focus();
    
    }

    switch (todo) {

      case "Entertainment":

        this.setState({ shows : "1000" })

      break;
 
      case "Social media":

        this.setState({ shows : "0100" })

      break;
 
      case "News and weather":

        this.setState({ shows : "0010" })

      break;

      case "Educational":

        this.setState({ shows : "0001" })

      break;        

      case "Diario": openURL("http://irtep.net/diario"); break;
      case "Calendar": openURL("http://irtep.net/agenda"); break;
      case "Netflix": openURL("http://www.netflix.com"); break;
      case "Youtube": openURL("http://www.youtube.com"); break;
      case "Batmud": openURL("http://www.bat.org"); break;  
      case "Batwiki": openURL("http://taikajuoma.ovh/wiki/Main_Page"); break;
      case "Maps by Ggr": openURL("https://tnsp.org/maps/"); break;
      case "Age of exile maps": openURL("http://jeskko.pupunen.net/gmap2/"); break;
      case "Batmud Weapon compare table": openURL("http://batshoppe.dy.fi/comparetable.php"); break;
      case "Reinc simulator": openURL("http://batshoppe.dy.fi/reincsim2/statsim.php"); break;
      case "Radio planeta": openURL("https://planeta.pe/"); break;
      case "Facebook": openURL("http://www.facebook.com"); break;
      case "Gmail": openURL("http://www.gmail.com"); break;
      case "El Comercio": openURL("http://www.elcomercio.pe"); break;
      case "Yle": openURL("http://www.yle.fi"); break;
      case "Foreca": openURL("http://www.foreca.com"); break;
      case "Peru 21": openURL("http://www.peru21.pe"); break;
      case "Duolingo": openURL("http://www.duolingo.com"); break;
      case "Stackblitz": openURL("http://stackblitz.com"); break;
      case "Glitch": openURL("http://glitch.com"); break;
      case "GitHub": openURL("http://github.com"); break;
      case "FreeCodeCamp": openURL("https://FreeCodeCamp.org");break;
      default: console.log("button in action not found..");

    } 
    
  }  

  render() {

    let centerPage = (<Clock/>);
    let targetState = this.state.enLinks;

      switch (this.state.shows) {

        case "0000": centerPage = (<Clock/>); break;        
        case "1000": targetState = this.state.enLinks; break;
        case "0100": targetState = this.state.soLinks; break; 
        case "0010": targetState = this.state.neLinks; break; 
        case "0001": targetState = this.state.edLinks; break; 
              
        default: console.log("state not found");

      }

      if (this.state.shows != "0000") {

          centerPage = (

            targetState.map(todo => {
              
                return (
                                    
                  <LinksItem
                    key ={todo.id}
                    title ={todo}
                    handleClick ={this.clickControl}
                  />

                      )

            })  
          );

      }

    return (

      <div className= "theApp">

        <div className= "b-ground">
      
          <Stars/>
  
        </div>
        
        <div>
        
          <Hello/>
        
        </div>

        <br/>
     
        <div>

          <center>

            { 
              this.state.headers.map(todo => {
            
              return (
              
                <MenuHeaderItem
                  key ={todo.id}
                  title={todo}
                  handleClick={this.clickControl}
                />

                    )

              }                     )

            }
               <br/> <br/> <br/>  

            {centerPage}

          </center>

        </div>

      </div>

    );

  }

}

render(<App />, document.getElementById('root'));

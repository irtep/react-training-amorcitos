import React, { Component } from 'react';
import Image from '../components/Image';
import Clock from '../components/Clock';
import LinkItem from './LinkItem.js';
/*
here need to map links if menu selected, if not then clock, queen and link to google
*/ 


class LinksSection extends Component {
  constructor(props){
    super(props);
  
  }

  render() {
    
    /*if user haven't clicked anything yet, show clock and image*/
    if (this.props.selected === 'not selected') {

      return(
        <div><Clock/><br/><Image/>
        <br/><br/>
        <LinkItem title= "Google" url= "https://www.google.com"/>
        </div>
      )
    } else {
      /* if user clicked, show that menu */
      const findMenu = this.props.arrays.filter( menu => this.props.selected === menu.name);
      const allLinks = findMenu[0].links.map( i => <li><LinkItem title= {i.name} url= {i.url}/></li>)

      return(
        <ul>
        {allLinks}
        </ul>
      )
    }
  }
}

export default LinksSection;

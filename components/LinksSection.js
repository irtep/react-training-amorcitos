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

    if (this.props.selected === 'not selected') {
      return(
        <div><Clock/><br/><Image/></div>
      )
    } else {
      const findMenu = this.props.arrays.filter( menu => this.props.selected === menu.name);

      findMenu[0].links.map( (linkOnCase, idx) => {
        
        return(
          <LinkItem
          url = {linkOnCase.url}
          title = {linkOnCase.name}
          key = {idx}
          />
        )
      });
    }
  }
}

export default LinksSection;
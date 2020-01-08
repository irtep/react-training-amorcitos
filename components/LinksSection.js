import React, { Component } from 'react';
import Image from '../components/Image';
import Clock from '../components/Clock';
/*
here need to map links if menu selected, if not then clock, queen and link to google
*/ 
class LinkItem extends Component {
  constructor(props){
    super(props);

    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(menuForShow){

  }

  render() {
    <div className= "linksMenu allLinks" onClick={() => this.goToUrl(this.props.url)}>
            
        <i className= "fa fa-caret-right" /> <span id= "linkTexts">{this.props.title} <br/></span>
  }

}

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
      const findMenu = this.props.arrays.filter( menu => menuForShow === menu.name);

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
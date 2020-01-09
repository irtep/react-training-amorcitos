import React, { Component } from 'react';

class LinkItem extends Component {
  constructor(props){
    super(props);

    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(menuForShow){
    // doesn't seem to work yet...
    function openURL(url) {
    
      const win = window.open(url, '_blank');
      
      win.focus();
    }
  }

  render() { 
    return (
      
    <div className= "linksMenu allLinks" onClick={() => this.goToUrl(this.props.url)}>
        <i className= "fa fa-caret-right" /> <span id= "linkTexts">{this.props.title} <br/></span>
    </div>
    )
  }

}

export default LinkItem;
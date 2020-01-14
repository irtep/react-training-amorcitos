import React, { Component } from 'react';

class LinkItem extends Component {
  constructor(props){
    super(props);

    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(){
      const win = window.open(this.props.url, '_blank');
      
      win.focus();
  }

  render() { 
    return (
      
    <div className= "linksMenu allLinks" onClick={() => this.goToUrl()}>

        <i className= "fa fa-caret-right" /> <span id= "linkTexts">{this.props.title} <br/></span>
        
    </div>
    )
  }

}

export default LinkItem;
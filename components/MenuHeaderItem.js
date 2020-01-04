import React, { Component } from 'react';

class menuHeaderItem extends Component {

  constructor(props){
    super(props);
  }
  render() {

    return(

      <span className= "menut" onClick={() => this.props.handleClick(this.props.title)}>
            
        <i className= "fa fa-star" /> <span id= "menuTexts">{this.props.title}</span>       
      </span>
    )
  }
}

export default menuHeaderItem;
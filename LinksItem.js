import React, { Component } from 'react';

class LinksItem extends Component {

  render() {

    return(

      <div className= "linksMenu allLinks" onClick={() => this.props.handleClick(this.props.title)}>
            
        <i className= "fa fa-caret-right" /> <span id= "linkTexts">{this.props.title} <br/></span>
        
      </div>
      
    )

  }

}

export default LinksItem
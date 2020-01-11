import React, { Component } from 'react';

class LightningBolt extends Component {

  constructor(props){
    super(props);
  }
  render() {
/*

NOT STARTED. Plan is to use SVG-line: 
(ref: https://www.w3schools.com/graphics/svg_line.asp)
to create a cool lightning that that flashes and goes back
animation: bolt .5s;
animation-delay: 2s;
animation-iteration-count: 1;

@keyframes bolt {
    from { opacity: 0; }
    to { opacity: 1; }
}


*/
    return(

      <div className= "stars">
        
        <i className= "fa fa-star star1"/>
        <br /><br /><br /><br /><br />
        <i className= "fa fa-star star2"/><br /><br /><br /> <i className= "fa fa-star star3"/><br /><br /><br /><br /> <i className= "fa fa-star star4"/>
        <br /><br /><br /><br />
        <i className= "fa fa-star star5"/>
        
      </div>
    )
  }
}

export default Stars;

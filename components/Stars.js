import React, { Component } from "react";

class Stars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="stars">
        <i className="fa fa-star star1" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <i className="fa fa-star star2" />
        <br />
        <br />
        <br /> <i className="fa fa-star star3" />
        <br />
        <br />
        <br />
        <br /> <i className="fa fa-star star4" />
        <br />
        <br />
        <br />
        <br />
        <i className="fa fa-star star5" />
      </div>
    );
  }
}

export default Stars;

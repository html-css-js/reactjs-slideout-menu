import React from "react";

var style = require("../../rsc/drawer.css");
var classNames = require('classnames');


var DrawerComponent = React.createClass({
  getInitialState:function()
  {
    return {open:false};
  },

  toggle:function(){
    if(this.state.open)
    {
      this.setState(
        {
          open:false
        }
      )
    }else
    {
      this.setState(
        {
          open:true
        }
      )
    }

    console.log(this.state);
  },

  render: function(){

    var navClass = classNames({
      'nav':true,
      'nav-open':this.state.open,
      'nav-closed':!this.state.open
    });

    return (
      <div>
        <a href="#" onClick={this.toggle}>☰</a>
        <nav className={navClass}>
          <a href="#" onClick={this.toggle}>☰</a>

          <ul>
            <li><a href="#" onClick={this.toggle}>Home</a></li>
            <li><a href="#" onClick={this.toggle}>Home</a></li>
            <li><a href="#" onClick={this.toggle}>Home</a></li>
            <li><a href="#" onClick={this.toggle}>Home</a></li>
          </ul>
        </nav>
      </div>
    );
  }
});

export default DrawerComponent;

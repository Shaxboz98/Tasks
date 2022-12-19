import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div style={{display:'flex', width:'80%',justifyContent:'space-between',marginTop:'10px'}}>
        <h1>4 Tasks</h1>
        <h3>4 Remain</h3>
      </div>
    );
  }
}

export default Header;
import React from 'react';
import Section from '../componets/Section';

class Root extends React.Component {

  render() {
    
    return (
      <div className='section' style={{paddingTop:'30px'}}>
      <Section/>
      </div>
    );
  }
}

export default Root;
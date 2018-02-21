import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navpills from './components/Navpills';
import Cards, { Card } from 'react-swipe-card';

const data = ['Alexandre', 'Thomas', 'Lucien'];

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Navpills />
        <Cards onEnd={action('end')} className='master-root'>
        {data.map(item => 
          <Card 
            onSwipeLeft={action('swipe left')} 
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
      </Wrapper>
    );
  }
}

export default App;

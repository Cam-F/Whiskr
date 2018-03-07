import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Discover from './pages/Discover';
import Local from './pages/Local';
import Wrapper from './components/Wrapper';


const App = () =>
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/local" component={Local} />
      </Wrapper>
    </div>
  </Router>;

export default App;

import React from 'react'
import { Wrapper } from '../Context/userContext';
import { Settings } from './Setting.js';
import { Home } from './Home.js';
const App = () => {

  return (
    <div id="main">
      <Wrapper>
        <Settings />
        <Home />
      </Wrapper>
    </div>
  )
}


export default App;
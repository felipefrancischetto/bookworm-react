import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

const App = () => (
  <div>
    <Container>
      <Route path='/' exact component={ HomePage }/>
      <Route path='/login' exact component={ LoginPage }/>
    </Container>
  </div>
)

export default App;

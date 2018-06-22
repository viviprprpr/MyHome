import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../views/home'
import Default from '../views/defaults'

export default () => [
  <Route exact path="/" component={Home} />,
  <Route exact path="/default" component={Default} />,
]

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import PageWithoutRouter from '../Page'
import HomePage from '../HomePage'
import RecipiesPage from '../RecipiesPage'
import CookbooksPage from '../CookbooksPage'

const Page = withRouter(PageWithoutRouter);
const renderHome = () => (
  <Page>
    <HomePage />
  </Page>
)
const renderCookbooks = () => (
  <Page>
    <CookbooksPage />
  </Page>
)
const renderRecipies = () => (
  <Page>
    <RecipiesPage />
  </Page>
)

export default () => (
  <Router>
    <Switch>
      <Route path="/cookbooks" component={renderCookbooks} />
      <Route path="/recipies" component={renderRecipies} />
      <Route path="/" render={renderHome} />
    </Switch>
  </Router>
)

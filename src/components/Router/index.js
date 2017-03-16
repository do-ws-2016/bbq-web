import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import PageWithoutRouter from '../Page';
import HomePage from '../HomePage';
import RecipiesPage from '../RecipiesPage';
import CookbooksPage from '../CookbooksPage';
import CookbookPage from '../CookbookPage';
import RecipePage from '../RecipePage';
import NewCookbookPage from '../NewCookbookPage';
import withId from '../../hoc/withId';

const Page = withRouter(PageWithoutRouter);

export default () => (
  <Router>
    <Page>
      <Switch>
        <Route path="/cookbooks/new" component={NewCookbookPage} />
        <Route path="/cookbooks/:id" component={withId(CookbookPage)} />
        <Route path="/recipies/:id" component={withId(RecipePage)} />
        <Route path="/cookbooks" component={CookbooksPage} />
        <Route path="/recipies" component={RecipiesPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Page>
  </Router>
);

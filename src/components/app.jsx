import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GroupWordsPage from './GroupWordsPage';
import MainPage from './MainPage';
import MiniDrawer from './Sidebar';
import Textbook from './Textbook';

const App = () => {
  const routePage = () => {
    return (
      <>
        <Route path="/" render={() => <MainPage />} exact />
        <Route
          path="/textbook"
          render={() => {
            return <Textbook />;
          }}
          exact
        />
        <Route
          path="/textbook/group/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <GroupWordsPage groupId={id} />;
          }}
        />
      </>
    );
  };
  return (
    <>
      <Router>
        <MiniDrawer routePage={routePage}></MiniDrawer>
      </Router>
    </>
  );
};

export default App;

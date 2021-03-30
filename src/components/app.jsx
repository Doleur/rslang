import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './Footer';
import GroupWordsPage from './GroupWordsPage';
import Header from './Header';
import MainPage from './MainPage';
import MiniDrawer from './Sidebar';
import Textbook from './Textbook';

const App = () => {
  const routePage = () => {
    return (
      <Container>
        <Header />
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
        <Footer />
      </Container>
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

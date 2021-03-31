import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useAlert } from '../../contexts/AlertContext';
import Footer from '../Footer';
import GroupWordsPage from '../GroupWordsPage';
import Header from '../Header';
import MainPage from '../MainPage';
import SignUp from '../SignUp';
import Textbook from '../Textbook';
import * as S from './styled';

const App = () => {
  const { showAlert, alertType, alertText } = useAlert();

  return (
    <>
      {showAlert && alertText.length > 0 && (
        <S.Flash severity={alertType}>{alertText}</S.Flash>
      )}
      <Container>
        <Router>
          <Header />
          <main>
            <Route path="/" render={() => <MainPage />} exact />
            <Route path="/signup" render={() => <SignUp />} exact />
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
          </main>
          <Footer />
        </Router>
      </Container>
    </>
  );
};

export default App;

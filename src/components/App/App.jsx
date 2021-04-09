import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useAlert } from '../../contexts/AlertContext';
import DeletedWords from '../DeletedWords';
import DifficultWords from '../DifficultWords';
import Sprint from '../game_sprint';
import AudioCall from '../game-audio-call';
import GamesPage from '../gamesPage';
import GroupWordsPage from '../GroupWordsPage';
import Login from '../Login';
import MainPage from '../MainPage';
import MiniDrawer from '../Sidebar';
import SignUp from '../SignUp';
import Textbook from '../Textbook';
import * as S from './styled';

const App = () => {
  const { showAlert, alertType, alertText } = useAlert();

  const routePage = () => {
    return (
      <>
        {showAlert && alertText.length > 0 && (
          <S.Flash severity={alertType}>{alertText}</S.Flash>
        )}
        <Route path="/" render={() => <MainPage />} exact />
        <Container>
          <Route path="/signup" render={() => <SignUp />} exact />
          <Route path="/login" render={() => <Login />} exact />
        </Container>
        <Route
          path="/textbook"
          render={() => {
            return <Textbook />;
          }}
          exact
        />
        <Route
          exact
          path="/textbook/group/:id/deleted_words"
          render={({ match }) => {
            const { id } = match.params;
            return <DeletedWords groupId={id} />;
          }}
        />
        <Route
          exact
          path="/textbook/group/:id/difficult_words"
          render={({ match }) => {
            const { id } = match.params;
            return <DifficultWords groupId={id} />;
          }}
        />
        <Route
          exact
          path="/textbook/group/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <GroupWordsPage groupId={id} />;
          }}
        />
        <Route path="/game/" render={() => <GamesPage />} exact />
        <Route path="/game/audiocall" render={() => <AudioCall />} />
        <Route path="/game/sprint" render={() => <Sprint />} />
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

import React from 'react';

import VideoYouTube from '../VideoYoutube';
import * as S from './styled';

const MainPage = () => {
  return (
    <S.MainPageWrapper>
      <h1>Учите новые слова каждый день с RSlang</h1>
      <p>
        Приложение для изучения иностранных слов, отслеживания индивидуального
        прогресса и мини-игр.
      </p>
      <VideoYouTube videoId="w6Yu8oTtK14" />
    </S.MainPageWrapper>
  );
};

export default MainPage;

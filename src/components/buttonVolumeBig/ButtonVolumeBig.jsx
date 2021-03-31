import React, { useState } from 'react';
import { VolumeUp } from 'react-bootstrap-icons';

import { http } from '../../constants/constants';
import * as S from './styled';

const ButtonVolumeBig = ({ audio }) => {
  const audioUrl = http + audio;
  audio = new Audio(audioUrl);
  const play = () => {
    audio.play();
  };

  return (
    <S.ButtonVolume size="lg" variant="outline-secondary" onClick={play}>
      <VolumeUp size={96} />
    </S.ButtonVolume>
  );
};

// ButtonVolumeBig.propTypes = {
//   audio: string
// };

export default ButtonVolumeBig;

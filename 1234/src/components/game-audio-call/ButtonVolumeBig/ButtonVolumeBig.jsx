import React, { useEffect } from 'react';
import { VolumeUp } from 'react-bootstrap-icons';
import { string } from 'prop-types';

import { http } from '../../../constants/constants';
import * as S from './styled';

const ButtonVolumeBig = ({ audio }) => {
  const audioUrl = http + audio;
  const wordAudio = new Audio(audioUrl);

  // useEffect(() => {
  //   wordAudio.play();
  // }, [wordAudio]);

  const play = () => {
    wordAudio.play();
  };

  return (
    <S.ButtonVolume size="lg" variant="outline-secondary" onClick={play}>
      <VolumeUp size={96} />
    </S.ButtonVolume>
  );
};

ButtonVolumeBig.propTypes = {
  audio: string
};

export default ButtonVolumeBig;

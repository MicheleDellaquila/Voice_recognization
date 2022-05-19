import React from 'react';
import './voiceRecognization.scss';
import { AiOutlineAudio } from 'react-icons/ai';
import useSpeech from '../../hooks/useSpeech';

const VoiceRecognization = () => {
  const { startListening } = useSpeech();

  // speech
  const speechHandler = () => {
    startListening();
  };

  return (
    <div className='VoiceRecognization' onClick={speechHandler}>
      <AiOutlineAudio className='VoiceRecognization__icon' />
    </div>
  );
};

export default VoiceRecognization;

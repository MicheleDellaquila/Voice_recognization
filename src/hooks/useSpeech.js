import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import commands from '../utility/commands';

const useSpeech = () => {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  return {
    isSupport: browserSupportsSpeechRecognition,
    startListening: () => SpeechRecognition.startListening({ continous: true, language: 'it' }),
  };
};

export default useSpeech;

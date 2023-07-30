import React, { useState } from 'react';
import DisplayTranscript from './DisplayTranscript';
import PodcastForm from './PodcastForm';

function AppController() {
  const [transcript, setTranscript] = useState("");
  console.log('Rendering AppController');
  console.log('AppController state', transcript);

  const handleSetTranscript = (transcript) => {
    setTranscript(transcript);
  };

  return (
    <div>
      <PodcastForm handleSetTranscript={handleSetTranscript} />
    
      <DisplayTranscript transcript={transcript} />
    </div>
  );
}

export default AppController;
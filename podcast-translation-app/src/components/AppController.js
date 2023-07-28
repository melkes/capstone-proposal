import React, { useState } from 'react';
import DisplayTranscript from './DisplayTranscript';
import PodcastForm from './PodcastForm';

function AppController() {
  const [transcript, setTranscript] = useState("");

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
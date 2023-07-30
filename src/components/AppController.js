import React, { useState } from 'react';
import DisplayTranscript from './DisplayTranscript';
import PodcastForm from './PodcastForm';

function AppController() {
  const [transcript, setTranscript] = useState("");
  console.log('Rendering AppController');
  console.log('AppController state', transcript);
  
  const [transcriptReady, setTranscriptReady] = useState(false);

  const handleSetTranscript = (transcript) => {
    setTranscript(transcript);
  };

  return (
    <div>
      <PodcastForm 
        handleSetTranscript={handleSetTranscript}
        setTranscriptReady={setTranscriptReady} 
        />
    
      {transcriptReady ? (
        <DisplayTranscript transcript={transcript} />
      ) : (
        <p>Loading...</p>  
      )}
    </div>
  );
}

export default AppController;
import React, {useState} from "react";

function AppController(){
  const [transcript, setTranscript] 
  = useState("");

const handleSetTranscript = (transcript) => {
  setTranscript(transcript);
}

return (
//   {transcript ? <DisplayTranscript transcript={transcript} /> : <PodcastForm handleSetTranscript={handleSetTranscript} /> }
  
  );
}

export default AppController;

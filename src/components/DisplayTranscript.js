import React from "react";

function DisplayTranscript(props){
  return (
    <div className="transcript">
      <h2>Here is your transcript!</h2>
      <p className="transcript-text">{props.transcript}</p>
    </div>
  );
}

export default DisplayTranscript;
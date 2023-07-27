import React, {useState} from "react";

function DisplayTranscript(props){
  return (
    <div className="transcript">
      <h2>Here is your transcript!</h2>
      <p>{props.transcript}</p>
    </div>
  );
}

export default DisplayTranscript;
import React, { useState } from "react";

function PodcastForm() {

  const [podcastData, setPodcastData] = useState(""); // initialize state
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(podcastData); // log state
  }

  const handleChange = (event) => {
    setPodcastData(event.target.value); // update state
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          value={podcastData} // set value
          onChange={handleChange} // update state when changed
          />
      </form>
    </div>
  );
}

export default PodcastForm;
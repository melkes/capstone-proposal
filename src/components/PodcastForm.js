import React, { useState } from "react";

function PodcastForm(props) {

  const [podcastData, setPodcastData] = useState(""); // initialize state
  const [podcastUrl, setPodcastUrl] = useState(""); // initialize state for url input

  const handleSubmit = (event) => {
    event.preventDefault();

 // Check if podcastUrl is not empty, use URL instead of uploaded file
  if (podcastUrl) {
    console.log(`Submitting URL: ${podcastUrl}`);
    fetch('https://api.openai.com/v1/audio/translations', {
      method: 'POST',
      body: JSON.stringify({url: podcastUrl, model: 'whisper-1'}), // send URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      const transcript = data.text; 
      props.handleSetTranscript(transcript);
    })
    .catch((error) => console.error('Error:', error));
  } else if (podcastData) {
    console.log(`Submitting File: ${podcastData.name}`);
    let formData = new FormData();  // Create a FormData object
    formData.append("file", podcastData); // Add the file to the request
    formData.append("model", "whisper-1"); // Add the model parameter to the request

    fetch('https://api.openai.com/v1/audio/translations', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      }
    })
    .then(response => response.json())
    // code to display transcript
    .then(data => {
      // Extract text
      const transcript = data.text; 
      // Pass transcript back to parent 
      props.handleSetTranscript(transcript);
    })
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  } else {
    console.error('No file or URL provided');
    alert('Please enter a URL or select a file');
  }
}
  const handleChange = (event) => {
    setPodcastData(event.target.files[0]); // update state with file
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="podcast-form"> {/* To do: add styles for this */}
{/* url input */}
        <input 
          type="text"
          name="podcastUrl"
          placeholder="Enter a URL"
          onChange={(event) => setPodcastUrl(event.target.value)} // update state when URL is entered
        />
        <p>Or</p>
        <input 
          type="file"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          onChange={handleChange} // update state when changed
          />
          <div>
          <p class="main-text">
            Need a file to try out? Try <a href="https://traffic.omny.fm/d/clips/60311b15-274a-4e3f-8ba9-ac3000834f37/5fd6f200-265f-42c7-ab4e-ae9a00ce4223/ee83a506-8eb1-47f8-8b4c-ae9a00ce62d2/audio.mp3" download>this</a> trailer for an Italian food podcast, or <a href="https://www.nhk.or.jp/s-media/news/podcast/audio/7c2248ff0f5131f1ce60a6f6451a1651_64k.mp3" download>this</a> Japanese news update.
          </p>
          <p class="secondary-text">Currently you'll need to download the file to your computer and then upload it via this form. Support for URLs is coming!</p>
          </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PodcastForm;
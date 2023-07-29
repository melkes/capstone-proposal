import React, { useState } from "react";

function PodcastForm(props) {

  const [podcastData, setPodcastData] = useState(""); // initialize state
  const [language, setLanguage] = useState("en"); // initialize state, default to english
  console.log('PodcastForm state', { podcastData, language });

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();  // Create a FormData object
    formData.append("file", podcastData); // Add the file to the request
    formData.append("language", language); // Add the language to the request
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
      // Extract transcript text
      const transcript = data.text; 
      // Pass transcript back to parent 
      props.handleSetTranscript(transcript);

    })

    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  }

  const handleChange = (event) => {
    setPodcastData(event.target.files[0]); // update state with file
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // update state with language choice
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="podcast-form"> {/* To do: add styles for this */}
        <input 
          type="file"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          onChange={handleChange} // update state when changed
          />
          <p>Choose the language for your source</p>
        <select 
          name="language"
          value={language} // set value
          onChange={handleLanguageChange} // update state when changed
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ar">Arabic</option>
          <option value="ru">Russian</option>
          <option value="hi">Hindi</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PodcastForm;
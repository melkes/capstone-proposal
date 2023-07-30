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
          <div>
          <p>
            Need a file to try out? Try <a href="https://traffic.omny.fm/d/clips/60311b15-274a-4e3f-8ba9-ac3000834f37/5fd6f200-265f-42c7-ab4e-ae9a00ce4223/ee83a506-8eb1-47f8-8b4c-ae9a00ce62d2/audio.mp3" download>this</a> trailer for an Italian food podcast, or <a href="https://www.nhk.or.jp/s-media/news/podcast/audio/7c2248ff0f5131f1ce60a6f6451a1651_64k.mp3" download>this</a> Japanese news update.
          </p>
          </div>
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
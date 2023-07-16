import React, { useState } from "react";

function PodcastForm() {

  const [podcastData, setPodcastData] = useState(""); // initialize state
  const [language, setLanguage] = useState("en"); // initialize state, default to english

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(podcastData, language); // log state
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
          value={podcastData} // set value
          onChange={handleChange} // update state when changed
          />
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
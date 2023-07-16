import React from "react";

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
          type="text"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          value={formData.podcastData} // set value
          onChange={handleChange} // update state when changed
          />
      </form>
    </div>
  );
}

export default PodcastForm;
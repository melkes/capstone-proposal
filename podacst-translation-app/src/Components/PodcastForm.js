import React from "react";

function PodcastForm() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("it's a form!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          // value={formData.podcastData} 
          />
      </form>
    </div>
  );
}

export default PodcastForm;
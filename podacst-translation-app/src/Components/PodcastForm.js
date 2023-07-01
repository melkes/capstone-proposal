import React from "react";

function PodcastForm() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="podcastData"
          placeholder="Upload file or enter a URL"
          value={formData.podcastData} />
      </form>
    </div>
  );
}

export default PodcastForm;
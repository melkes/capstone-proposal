import React from "react";
import PodcastForm from './PodcastForm';
import Header from './Header'; // Import the Header component

function App() {
  return (
    <div className="container">
      <Header />
      <div style={{ margin: '20px 0' }} /> 
      <PodcastForm />
    </div>
  );
}

export default App;

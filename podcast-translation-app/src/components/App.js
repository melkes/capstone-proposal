import React from "react";
import Header from './Header'; // Import the Header component
import PodcastForm from './PodcastForm';

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

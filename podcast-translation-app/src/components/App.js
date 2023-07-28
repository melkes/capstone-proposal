import React from "react";
import Header from './Header'; // Import the Header component
import AppController from './AppController';

function App() {
  return (
    <div className="container">
      <Header />
      <div style={{ margin: '20px 0' }} /> 
      <AppController />
    </div>
  );
}

export default App;

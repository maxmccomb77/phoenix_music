import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HeaderComponent';
import HomePage from './components/HomeComponent'

function App() {
  return (
    <div className="App">
        <Header />
        <HomePage/>
    </div>
  );
}

export default App;

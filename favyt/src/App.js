import React from 'react';
import './App.css';
import Header from './frontend/component/Header'
import Navbar from './frontend/component/Navbar'
import Sidebar from './frontend/component/Sidebar';
import Content from './frontend/component/Content';
import Footer from './frontend/component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="row">
          <Content />
          <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

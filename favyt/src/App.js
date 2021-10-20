import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilesUploadComponent from './frontend/component/files-upload-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
      </div>
    );
  }
}

export default App;
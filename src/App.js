import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { upload_file } from './upload_file';


function App() {
  return (
    <div className="App">
      <header>
        <div>
          <input type="file" id="file_upload_div" onInput={(e)=>upload_file(e)} />
        </div>
      </header>
      <AmplifySignOut />
      
    </div>
  );
}

export default withAuthenticator(App);
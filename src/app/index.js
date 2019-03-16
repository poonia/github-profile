import React, { Component } from 'react';
import { Profile } from "../components/Profile";
import { Description } from "../components/Description";
import { Repository } from "../components/Repository";
// import { Profile, Description, Repository } from '../components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <aside className="aside-bio">
          <Profile></Profile>
        </aside>
        <main className="main-details">
          <Description></Description>
          <Repository></Repository>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './style.scss';

export class Profile extends Component {
  render() {
    return (
      <div id="card-user">
        <div className="header">
        </div>
        <div className="avatar">
          <img id="UserAvatar" src="http://www.alcoholandyouni.com/wp-content/uploads/2013/01/team4.jpg" alt="..." />
        </div>
          <div className="text">
            <h3 rel="name">John Doe</h3>
            <p rel="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>

          <div className="user-details-list">
            <div className="user-details-list-item" data-user-name>
              <i class="octicon icon-mark-github"></i>
              <a className="user-details-list-item-content" rel="username" href="https://github.com/anson0370">
                @anson0370
              </a>
            </div>
            <div className="user-details-list-item" data-user-email>
              <i class="octicon icon-mail"></i>
              <a className="user-details-list-item-content" href="mailto:anson0370@gmail.com">
                anson0370@gmail.com
              </a>
            </div>

            <div className="user-details-list-item" data-user-location>
              <i class="octicon icon-location"></i>
              <span className="user-details-list-item-content">Hangzhou. China </span>
            </div>
            
          </div>
        </div>
    );
  }
}
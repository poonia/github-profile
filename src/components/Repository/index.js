import React, { Component } from 'react';
import './style.scss';

export class Repository extends Component {
  render() {
    return (
      <div className="repo-flex-container">
        
        <div className="repo-component">

          <div className="repo-component-head">
            <h1 className="repo-component-title">
              <a className="repo-component--repolink" href="#">
                <i class="octicon icon-repo"></i>
                <span>anson0370 /</span> alfred-numbersystem-convertor
              </a>
            </h1>
          </div>

          <div className="repo-component-detail">
            An alfred workflow for number system conert. Code that'll help you kickstart a personal website that showcases your work as a software developer.
          </div>

          <div className="repo-component-meta">
            <a href="#" className="repo-component__repolink">
              <i class="octicon icon-star"></i> 16
            </a>
            <a className="repo-component__repolink" href="#">
              <i class="octicon icon-git-branch"></i>
              1
            </a>
          </div>

        </div>

      </div>
    );
  }
}
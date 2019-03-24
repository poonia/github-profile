import React, { Component } from 'react';
import './style.scss';

export class Repository extends Component {
  render() {
    const repos = this.props.repos;
    return (
      <div className="repo-flex-container">
        {
          repos.map(repo => (
            !repo.fork &&
              <div className="repo-component">
                <div className="repo-component-head">
                  <h1 className="repo-component-title">
                    <a className="repo-component--repolink" href={repo.html_url}>
                        <i className="octicon icon-repo"></i>
                        {repo.full_name}
                    </a>
                  </h1>
                </div>
                <div className="repo-component-detail">
                  {repo.description}
                </div>
                <div className="repo-component-meta">
                  {repo.language &&
                    <a href={repo.languages_url} className="repo-component__repolink repo-component__lang">
                      {repo.language}
                    </a>
                  }
                  {repo.stargazers_count > 0 &&
                    <a href={repo.stargazers_url} className="repo-component__repolink">
                      <i className="octicon icon-star"></i> {repo.stargazers_count}
                    </a>
                  }
                  {repo.forks_count > 0 &&
                    <a className="repo-component__repolink" href={repo.forks_url}>
                      <i className="octicon icon-git-branch"></i>
                      {repo.forks_count}
                    </a>
                  }

                </div>
              </div>
          ))
        }
      </div>
    );
  }
}
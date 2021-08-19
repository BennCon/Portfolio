import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GithubCards.css'

function GithubCards() {
  //Gets array of repos from github api
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const url = 'https://api.github.com/user/repos?sort=updated&visibility=public';
    const access_token = process.env.REACT_APP_GITHUB;
    const fetchRepos = async () => {
      const response = await axios(url, { headers: { 'Authorization': access_token } });
      setRepos(response.data);
    };
    fetchRepos();
  }, []);

  return (
    <div class="Main">
      <div class="TitleArea">
        <h2>Here are some of my coding projects:</h2>
        <p>(Automatically pulled from GitHub using their API)</p>
      </div>
      <div className="CardsContainer">
        {
          repos && repos.map(repo => {
            return (
              <div className="Card" key={repo.id} style={{ alignItems: 'center', margin: '20px 60px' }}>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default GithubCards;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GithubCards.css'

function GithubCards() {
  //Gets array of repos from github api
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const url = 'https://api.github.com/user/repos?visibility=public';
    const access_token = process.env.REACT_APP_GITHUB;
    const fetchRepos = async () => {
      const response = await axios(url, { headers: { 'Authorization': access_token } });
      setRepos(response.data);
    };
    fetchRepos();
  }, []);

  return (
    <div class="GithubCards">
      <div class="TitleArea">
        <h2>Here are some of my coding projects:</h2>
        <p>(Automatically pulled from GitHub using their API)</p>
      </div>
      <div className="CardsContainer">
        {
          repos && repos.map(repo => {
            return (
              <div className="Card" key={repo.id} style={{ alignItems: 'center', margin: '20px 60px' }}>
                <a class="CardTitle" href={repo.html_url}>{repo.name}</a>
                <a href={repo.html_url}>{repo.description}</a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default GithubCards;
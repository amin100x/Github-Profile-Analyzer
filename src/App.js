import './App.css';
import React, { useState } from 'react';
import ShowProfile from './components/ShowProfile';
import ProjectRepos from './components/ProjectsRepos';

function App() {

  const [Username, setUserName] = useState("");
  const [showData, setShowData] = useState(false);
  const [userNotFound, SetUserNotFound] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [Data, setData] = useState("");
  const [Repos, setRepos] = useState([]);

  const ShowDetails = async () => {
    const res = await fetch(`https://api.github.com/users/${Username}`);
    const data = await res.json();
    setData(data);

    const ress = await fetch(`https://api.github.com/users/${Username}/repos`);
    const repos = await ress.json();

    const SortedRepos = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    setRepos(SortedRepos);

    if (res.status === 404) {
      SetUserNotFound(true);
    }
    else {
      setShowData(true);
      setShowRepos(true);
    }
  }

  return (
    <div className="container">
      <div className="main">
        <h1>Github Profile Analyzer</h1>
        <input type="text" id="userName" onChange={e => setUserName(e.target.value)} placeholder="Github Username" />
        <button id="showDetails" onClick={ShowDetails}>Show Details</button>
      </div>
      {showData ? <ShowProfile userData={Data} /> : ""}
      {
        userNotFound ? "There is no such Github profile" : ""
      }
      {showRepos ? <ProjectRepos repo={Repos} /> : ""}

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';



class BballTeam extends React.Component{
  render() {

    const oneTeam = data.teams[1];

    return(
      <div>

        

        <h2>Name: {oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a march madness website</h1>
        <h3>Basketball Teams:</h3>

        {data.teams.map(oneTeam => <BballTeam {...oneTeam}/>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

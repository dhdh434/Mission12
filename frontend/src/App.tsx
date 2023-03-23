import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';



//create a bball function
class BballTeam extends React.Component < {school: string, name: string, city: string, state: string} > {
  render() {

    //return the this component
    const oneTeam = this.props;

    return(
      <div>

        
        {/* name for each thing */}
        <h2>Name: {oneTeam.school}</h2>
        <ul>
          <li>Mascot Name: {oneTeam.name}</li>
          <li>Location: {oneTeam.city}, {oneTeam.state}</li>
        </ul>
        
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* display some headers */}
        <h1>This is a march madness website</h1>
        <h3>Basketball Teams:</h3>

        {/* display all of the teams */}
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

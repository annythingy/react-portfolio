import logo from './logo.svg';
//import projects from './data.json'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
      {/* <GameList /> */}
    </div>
  );
}


// function GameList() {
//   const games = projects;
//   const listItems = games.map(game => <li key={game.id}>{game.title}</li>);
//   return (<ul>{listItems}</ul>);
// }

export default App;

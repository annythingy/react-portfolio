import logo from './logo.svg';
import projects from './projects-data.json';
import './App.css';

type ProjectType = "game" | "misc";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='row'>
          <div className="column">
            <h2>Game Projects</h2>
            <GameList projects={projects as Project[]} type="game" />
          </div>
          <div className="column">
            <h2>Other Projects</h2>
            <GameList projects={projects as Project[]} type="misc" />
          </div>
        </div>
      </header>
    </div>
  );
}

function GameList({ projects, type }: { projects: Project[]; type?: ProjectType }) {
  const filteredProjects = type ? projects.filter(game => game.type === type) : projects;
  const listItems = filteredProjects.map(game => <li key={game.id}>{game.title}</li>);
  return <ul>{listItems}</ul>;
}

export default App;

import logo from './logo.svg';
import avatar from './avatar.svg';
import FirstComponent from './components/FirstComponent';
import TempleteExpression from './components/TempleplateExpression';
import Event from './components/Event'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem Vindo a Aula </h1>
        <FirstComponent />
        <nav className='navClass'>
          <ul className='ulClass'>
            <li><a href="#home" className='liClass'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
       <figure> 
        <img src={logo} className="App-logo" alt="logo" />
        <img src={avatar} className="App-avatar" alt="avatar" />
       </figure>
       
      </header>
       <main>
        <h1>Welcome to the App</h1>
        
        <Event />
          <TempleteExpression />
        <p>This is a sample React application.</p>
      </main>
     <footer>
        <p>© 2024 My App</p>
      </footer> 
    </div>
  );
}

export default App;
 
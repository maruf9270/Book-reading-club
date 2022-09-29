
import './App.css';
import Navber from './Components/Navber/Navber';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      {/* Navigation starts from here */}
      <Navber></Navber>
      <div className='Main'>
        <Main></Main>

      </div>
    
    </div>
  );
}

export default App;

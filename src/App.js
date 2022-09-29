
import './App.css';
import Navber from './Components/Navber/Navber';
import Main from './Components/Main/Main';
import Toast from './Components/Toast/Toast';

function App() {
  return (
    <div className="App">
      {/* Navigation starts from here */}
      <Navber></Navber>

      
      <div className='Main'>
        <Main></Main>

      </div>
      <div className='toast'>
        <Toast></Toast>
      </div>
    
    </div>
  );
}

export default App;

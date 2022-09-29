
import './App.css';
import Navber from './Components/Navber/Navber';
import Main from './Components/Main/Main';
import Toast from './Components/Toast/Toast';
import Blog from './Components/Blog/Blog';

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
      <div className='blog my-10'> 
        <h2 className='text-center text-4xl text-white '>Blog</h2>
        <div className='flex justify-center items-center'>
        <Blog></Blog>
        </div>
      </div>
    
    </div>
  );
}

export default App;

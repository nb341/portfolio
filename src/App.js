

import './styles/home.scss';
import './styles/aboutme.scss';
import './styles/cube.scss';
import './styles/skills.scss';
import './styles/contact.scss';
import './styles/portfolio.scss';
import './styles/map.scss';
import Main from './components/MainComponent'; 
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    
    
    <div className="App">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;

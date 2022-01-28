
import FrontPage from './components/FrontPage';
import Gallery from './components/Gallery';
import About from './components/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
    <Route path ="/" element={<FrontPage/>}/>
    <Route  path ="/gallery" element={<Gallery/>}/>
    <Route path ="/about" element={<About/>}/>
 

        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

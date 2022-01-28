
import FrontPage from './components/FrontPage';
import Gallery from './components/Gallery';
import About from './components/About';
import {HashRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div>
      <HashRouter>
        <Routes>
    <Route path ="/" element={<FrontPage/>}/>
    <Route  path ="/gallery" element={<Gallery/>}/>
    <Route path ="/about" element={<About/>}/>
 

        </Routes>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './Component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Component/Trending';
import Show from './Component/Show';
import Popular from './Component/Popular';
import Genesis from './Component/Genesis';
import Temple from './Component/Temple';
import Vold from './Component/Vold';
import Bayc from './Component/Bayc';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Trending></Trending>} >  </Route>
          <Route path="/trending" element={<Trending></Trending>} >  </Route>
          <Route path="/show" element={<Show></Show>} >  </Route>
          <Route path="/popular" element={<Popular></Popular>} >  </Route>
          <Route path="/genesis" element={<Genesis></Genesis>} >  </Route>
          <Route path="/temple" element={<Temple></Temple>} >  </Route>
          <Route path="/vold" element={<Vold></Vold>} >  </Route>
          <Route path="/bayc" element={<Bayc></Bayc>} >  </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;                                                                                                                     
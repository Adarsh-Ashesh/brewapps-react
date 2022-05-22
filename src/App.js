import './App.css';
import Nav from './Component/Nav';
import Mob from './Component/Mob';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Component/Trending';
import Show from './Component/Show';
import Popular from './Component/Popular';
import Genesis from './Component/Genesis';
import Temple from './Component/Temple';
import Vold from './Component/Vold';
import Bayc from './Component/Bayc';
import SignUp from './Component/SignUp';
import Login from './Component/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Mob />
        <Routes>
          <Route path="/" element={<Trending></Trending>} >  </Route>
          <Route path="/trending" element={<Trending></Trending>} >  </Route>
          <Route path="/show" element={<Show></Show>} >  </Route>
          <Route path="/popular" element={<Popular></Popular>} >  </Route>
          <Route path="/genesis" element={<Genesis></Genesis>} >  </Route>
          <Route path="/temple" element={<Temple></Temple>} >  </Route>
          <Route path="/vold" element={<Vold></Vold>} >  </Route>
          <Route path="/bayc" element={<Bayc></Bayc>} >  </Route>
          <Route path="/" element={<h1>Product Listing Component</h1>}/>
         <Route path="/add" element={<h1>Add Product</h1>}/>
         <Route path="/update" element={<h1>Update Product</h1>}/>
         <Route path="/logout" element={<h1>Logout Product</h1>}/>
         <Route path="/profile" element={<h1>Profile Component</h1>}/>
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;                                                                                                                     
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipedetails from './Components/Recipedetails';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<Recipedetails/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

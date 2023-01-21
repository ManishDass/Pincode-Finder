import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/result/:searchby/:input' element={<Result/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

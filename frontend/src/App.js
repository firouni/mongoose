import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/navBar/Navbar';
import Home from './Components/Home';
import ListContact from './Components/listContact/ListContact';
import AddContact from './Components/addContact/addContact';
import UpdateContact from './Components/updateContact/updateContact';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<ListContact/>} />
        <Route path='/add' element={<AddContact/>} />
        <Route path='/update/:id' element={<UpdateContact/>} />
      </Routes>
      
    </div>
  );
}

export default App;

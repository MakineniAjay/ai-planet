import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Favsub from './components/Favsub';
import Allsub from './components/Allsub';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Header/>
      <Body/> */}

      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element = {<Allsub/>}/>
          <Route path='/favsub' element = {<Favsub/>}/>
        </Route>
        <Route path='/submission' element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;

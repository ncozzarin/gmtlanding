import './App.css';
import Cards from './components/carousel/Cards';
import Navbar from './components/header/NavBar';

function App() {
  return (
<div className='w-9/12 m-auto'>
  <Navbar></Navbar>
  <div>
  <Cards></Cards>
  </div>
  <h2 className="font-bold text-center pt-12 text-5xl  text-blue-700 pt-1">GMT CHANGE</h2>
  <hr class="border-4 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
</div>
  );
}

export default App;

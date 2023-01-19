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
  <h2 className="font-bold text-center pt-12 md:text-5xl text-xl pt-36 text-blue-700 pt-1">GMT CHANGE</h2>
  <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
  <h3 className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Métaux précieux - Transfert de fonds</h3>
</div>
  );
}

export default App;

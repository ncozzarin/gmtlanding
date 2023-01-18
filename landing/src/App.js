import './App.css';
import Cards from './components/carousel/Cards';
import Navbar from './components/header/NavBar';

function App() {
  return (
<div className='w-9/12 m-auto'>
  <Navbar></Navbar>
  <Cards></Cards>
</div>
  );
}

export default App;

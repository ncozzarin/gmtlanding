import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnglishComponent from './layouts/EnglishComponent';
import FrenchComponent from './layouts/FrenchComponent';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div>
    <Helmet>
      <link rel="alternate" href={`${window.location.href}`} hreflang="en" />
      <link rel="alternate" href={`${window.location.href}/fr`} hreflang="fr" />
    </Helmet>
      <Router>
        <Routes>
          <Route exact path="/" element={<EnglishComponent/>}/>
          <Route exact path="/en" element={<EnglishComponent/>}/>
          <Route exact path="/fr" element={<FrenchComponent/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;

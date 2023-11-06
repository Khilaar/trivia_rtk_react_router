
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoPage from './pages/NoPage';
import QuestionPage from './pages/Question';
import ResultsPage from './pages/ResultsPage';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path="/question" element={<QuestionPage/>}/>
        <Route path='/results' element={<ResultsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

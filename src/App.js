import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReadFile from './components/ReadFile';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to="/read-file" /> } />
        <Route path='/read-file' element={ <ReadFile /> } />
        <Route path='/output' element={ <Output /> } />
      </Routes>
    </div>
  );
}

export default App;

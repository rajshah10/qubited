import { Route, Routes } from 'react-router';
import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTw from './components/ComponentTw';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/comp1" element={<ComponentOne/>}/>
        <Route path = "/comp2" element={<ComponentTw/>}/>
      </Routes>
    </div>
  );
}

export default App;

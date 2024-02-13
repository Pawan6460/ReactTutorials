import React, {useState, createContext} from 'react';
import './App.css';
import Concepts from './pages/Concepts';

export const UserContext = createContext();
export default function App() {
 // const [state, setState] = useState('Pawan Shetty');
  return (
    <UserContext.Provider value="Pawan">
      <Concepts/>
    </UserContext.Provider>
  );
}



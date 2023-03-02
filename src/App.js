/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 01/03/2023 - 20:54:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/index/Index';
import { Hook } from './providers/Hook';

function App() {
  return (
    <>
      <Hook>
        <Routes>
          <Route
            exact
            path="/"
            element={<Index />}
          />
        </Routes>
      </Hook>
    </>
  );
}

export default App;

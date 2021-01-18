import React from 'react';
import logo from './logo.svg';
import './App.css';
import PermissionsTable from './components/PermissionsTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PermissionsTable/>
          {/*<PermissionsTable colunas="5" sections=[{ name:"Analise", rows:["cpmtas","transa"u]}] />*/}
       
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import "./index.css"
import Homepage from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
     
      <div>
        <Route path="/" component={Homepage} />
        
      </div>
     
    </BrowserRouter>

  );
}

export default App;

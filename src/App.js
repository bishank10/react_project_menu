import React from 'react';
import Homepage from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/" component={Homepage} />
        
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

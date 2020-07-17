import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Single from './pages/Single'

import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {

  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = (flag) => {
    setFormOpen(flag);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header onFormOpen={handleFormOpen} isFormOpen={formOpen} />
        <Form isFormOpen={formOpen}/>
        <Switch>
          <Route path="/news/:id">
            <Single />
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

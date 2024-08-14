import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Projects />
    </div>
  );
}

export default App;


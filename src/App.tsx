import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {InfoForMe} from "./layout/sections/info-for-me/infoForMe";
import { Services } from './layout/sections/services/Services';


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Projects />
        <InfoForMe />
        <Services />
    </div>
  );
}

export default App;



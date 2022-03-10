import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar} from '../src/components/Navbar';
import {About} from '../src/sections/About'
import {Roadmap} from '../src/sections/Roadmap'
import {Community} from '../src/sections/Community'
import {Partners} from '../src/sections/Partners'
import {Founders} from '../src/sections/Founders'
import {Client} from '../src/sections/Client'
import {Discord} from '../src/sections/Discord'
import {FAQ} from '../src/sections/FAQ'
import {Contact} from '../src/sections/Contact'


ReactDOM.render(
  <React.StrictMode>
    <div className="parallax">
      <Navbar />
      <About />
      <Roadmap />
      <Community />
      <Client />
      <Partners />
      <Founders />
      <Discord />
      <FAQ />
      <Contact />
    <div className="mask"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
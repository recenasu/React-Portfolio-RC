import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App

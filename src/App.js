import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import TechList from './components/Techlist';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', margin: '20px' }}>
      <Header />
      <Profile />
      <TechList />
      <Footer />
    </div>
  );
}

export default App;

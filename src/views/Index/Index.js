import React from 'react';
// import logo from '../../components/Logo/logo.svg';

import Header from '../../components/Header/Header';
import Content from './Content';
import Footer from '../../components/Footer/Footer';

export default function Index() {
  return (
    <div className="main-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

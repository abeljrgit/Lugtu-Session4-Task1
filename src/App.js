import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, ContactUs, Dashboard, SignUp, Country } from './pages';
import { Navbar } from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:country_code" element={<Country />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

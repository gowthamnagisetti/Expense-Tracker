import './App.css';
import React from 'react';
import Register from './components/Register';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddExpense from './components/addExpense';

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
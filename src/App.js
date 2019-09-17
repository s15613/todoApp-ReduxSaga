import React from 'react';
import './App.css';

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import Footer from './components/Footer'
import Modal from './components/Modal'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AddTodo />
        <Footer />
        <ListTodo />
        <Modal />
    </div>
    </Provider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {getContacts} from './contacts/list';

function App() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getContacts()
      .then(contacts => {
        if (mounted) {
          setContactList(contacts)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {
          contactList &&
          contactList.map(item => 
              (
                <div key={item._id}>
                  <div>{item.firstName}</div>
                  <div>{item.lastName}</div>
                  <div>{item.email}</div>
                </div>
              )              
          )
        }
      </div>
    </div>
  );
}

export default App;

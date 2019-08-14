import React, { useState } from 'react';
import './App.css';

import Form from './components/Form.js';
import Member from './components/Member.js';
import { team } from './data.js';

function App() {
  
  const [member, setMember] = useState({});
  
  return (
    <div className="App">
      <Form />
      <Member info={team} setMember={setMember} />
    </div>
  );
}

export default App;

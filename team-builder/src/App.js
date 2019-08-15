import React, { useState } from 'react';
import './App.css';

import Form from './components/Form.js';
import Member from './components/Member.js';

function App() {
  
  const [teamList, setTeamList] = useState([]);

  const updateMember = (props) => {
    setTeamList([...teamList, props]);
  }

  console.log(teamList); 

  return (
    <div className="App">
      <Form updateMember={updateMember} />
      <Member info={teamList}  />
    </div>
  );
}

export default App;

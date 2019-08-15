import React, { useState } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';

import MemberForm from './components/MemberForm.js';
import Member from './components/Member.js';
import Navbar from './components/Navbar.js';

function App() {
  
  const [teamList, setTeamList] = useState([]);

  const updateMember = (props) => {
    setTeamList([...teamList, props]);
  }

  console.log(teamList); 

  return (
    <div className="App">
      <Navbar />
      <Container>
        <MemberForm updateMember={updateMember} />
        <Member info={teamList}  />
      </Container>
    </div>
  );
}

export default App;

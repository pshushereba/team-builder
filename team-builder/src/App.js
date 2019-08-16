import React, { useState, useEffect } from 'react';
import {Container, Divider} from 'semantic-ui-react';
import './App.css';

import MemberForm from './components/MemberForm.js';
import Member from './components/Member.js';
import Navbar from './components/Navbar.js';

function App() {
  
  const [teamList, setTeamList] = useState([]);
  const [editMember, setEditMember] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const updateMember = (props) => {
    setTeamList([...teamList, props]);
  }

  const returnEditMember = (props) => {
    setTeamList([...teamList]);
    setIsEditing(false);
  }

  const memberToEdit = (foo) => {
    setEditMember(foo);
    setIsEditing(true);
  }
  // console.log(teamList); 

  return (
    <div className="App">
      <Navbar />
      <Container>
        <MemberForm
          updateMember={updateMember}
          editMember={editMember}
          isEditing={isEditing}
          teamList={teamList}
          returnEditMember={returnEditMember} />
        <Divider />
        <Member info={teamList} memberToEdit={memberToEdit} />
      </Container>
    </div>
  );
}

export default App;

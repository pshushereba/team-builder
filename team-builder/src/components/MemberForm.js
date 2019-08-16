import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

const MemberForm = (props) => {
    
    const emptyObj = {name: "", email: "", role: ""};
    const [member, setMember] = useState(emptyObj);
    

    // if(props.editMember !== undefined) {
    //     setMember(props.editMember)
    //     console.log("If", member)
    // } 

    useEffect(() => {
        setMember(props.editMember)
        console.log("In useEffect", props.editMember)
    }, [props.editMember])

    const handleChange = (event) => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
          };

        if (props.isEditing === false) {
            props.updateMember(newMember)
        } else {
            props.teamList.map((cv) => {
                if (cv.id === member.id) {
                    cv.name = member.name;
                    cv.email = member.email;
                    cv.role = member.role;
                    props.returnEditMember();
                }
            })
        }
        
        setMember(emptyObj)
    }
    
    return (
        <div>
            <Form onSubmit={event => handleSubmit(event)}>
                <fieldset>
                    <Form.Field>
                    <label>Name: </label>
                    <input type="text" name="name" value={member.name} placeholder="Name" onChange={handleChange} /><br />
                    </Form.Field>
                    <Form.Field>
                    <label>Email: </label>
                    <input type="text" name="email" value={member.email} placeholder="Email" onChange={handleChange} /><br />
                    </Form.Field>
                    <Form.Field>
                    <label>Role: </label>
                    <input type="text" name="role" value={member.role} placeholder="Role" onChange={handleChange} /><br />
                    </Form.Field>
                    <Button>Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default MemberForm;

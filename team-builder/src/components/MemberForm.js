import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

const MemberForm = (props) => {
    const [member, setMember] = useState({name: "", email: "", role: ""})
    
    const handleChange = (event) => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    // console.log(member)

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateMember(member)
        setMember({name: "", email: "", role: ""})
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

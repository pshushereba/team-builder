import React, { useState } from 'react'

const Form = (props) => {
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
            <form onSubmit={event => handleSubmit(event)}>
                <fieldset>
                    <label>Name: </label>
                    <input type="text" name="name" value={member.name} placeholder="Name" onChange={handleChange} /><br />
                    <label>Email: </label>
                    <input type="text" name="email" value={member.email} placeholder="Email" onChange={handleChange} /><br />
                    <label>Role: </label>
                    <input type="text" name="role" value={member.role} placeholder="Role" onChange={handleChange} /><br />
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Form;
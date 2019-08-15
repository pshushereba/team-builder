import React from 'react'

const MemberCard = (props) => {
    return (
        <div>
            <h1>Name: {props.name} </h1>
            <p>Email: {props.email} </p>
            <p>Role: {props.role} </p>
        </div>
    )
}

export default MemberCard;
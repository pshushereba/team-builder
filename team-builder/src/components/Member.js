import React from 'react'
import MemberCard from './MemberCard.js';

const Member = (props) => {
    return (
        <>
            {props.info.map((item) => {
                return <MemberCard name={item.name} email={item.email} role={item.role} />
            })}
        </>
    )
}

export default Member;

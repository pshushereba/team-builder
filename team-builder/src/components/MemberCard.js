import React from 'react'
import { Card, Container } from 'semantic-ui-react'

const MemberCard = (props) => {
    return (
        <>
            <Container>
                <Card>
                    <Card.Content>
                        <Card.Header>{props.name}</Card.Header>
                        <Card.Meta>{props.email}</Card.Meta>
                        <Card.Description>{props.role}</Card.Description>
                    </Card.Content>
                </Card>
            </Container>
        </>
    )
}

export default MemberCard;
import React from 'react'
import { Card, Button} from 'semantic-ui-react'
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: row
    padding: 2.5%;

`

const MemberCard = (props) => {
    return (
        <>
            <WrapperDiv>
                <Card>
                    <Card.Content>
                        <Card.Header>{props.name}</Card.Header>
                        <Card.Meta>{props.email}</Card.Meta>
                        <Card.Description>{props.role}</Card.Description>
                        <Button onClick={() => props.memberToEdit(props.item)}>Edit</Button>
                    </Card.Content>
                </Card>
            </WrapperDiv>
        </>
    )
}

export default MemberCard;
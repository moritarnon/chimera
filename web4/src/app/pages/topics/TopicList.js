import React, {useContext} from 'react';
import {Header} from "../../layout/Header";
import {BreakpointsContext} from "../../components/layout/BreakpointsProvider";
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'

const topicList = [
    { name: "Ukulele a jejich využití v zemědělství" },
    { name: "Marnotratní" },
    { name: "Donec Ipsum" },
];

export const TopicList= () => {

    //TODO load topic list

    const breakpoints = useContext(BreakpointsContext);
    const xs = breakpoints.eq('xs');

    const onNewTopic = () => {
        alert("No servise here.");
    }

    return (
        <React.Fragment>

            <Header noMargin title="Seznam fór">
                <ButtonGroup vertical={xs} size={xs && 'sm'}>
                    <Button onClick={onNewTopic}>
                        <span className="pr-2"><FontAwesomeIcon icon="plus"/></span>
                        Nové téma
                    </Button>
                </ButtonGroup>
            </Header>

            <ListGroup className="pt-3">
                {
                    topicList.map(topic => (
                        <ListGroup.Item action key={topic.name} to={`/forum/${topic.name}`} as={Link}>
                            {topic.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

        </React.Fragment>
    );
}
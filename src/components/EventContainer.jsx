import React from 'react'
import styled from 'styled-components';
import Event from './Event';


const EventContainerStyles = styled.div`
    display: flex;
`;

const EventContainer = () => {
 console.log('EventContainer');
    return (
        <EventContainerStyles>
            <Event/>
            <Event/>
            <Event/>
        </EventContainerStyles>
    )
}
export default EventContainer





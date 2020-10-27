import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { BASE_URL } from '../constants';
import Event from './Event';


const EventContainerStyles = styled.div`
    display: flex;

`;

const EventContainer = ({ setMenu,currentEvent,setCurrentEvent ,menus}) => {


    const [events, setEvents] = useState([]);

    useEffect( () => {
        (async() => {
            const res = await (await Axios.get(`${BASE_URL}/events`)).data;
            setEvents(res);
        })();
    },[])

// position: absolute;
//     transform: translate(-650px, -27px);

    return (
        <>
            {
                events.map((event) => (
                    <CSSTransition

                        unmountOnExit={currentEvent!==event?.id}
                        in={menus === 'home'}
                        timeout={400}
                        classNames={currentEvent!==event?.id?"my-header":"test"}>
                        <Event
                            style={currentEvent === event?.id ? {
                                position: 'absolute',
                                transform: 'translate(-360px, -58px)',
                                top:0,
                                left:0,

                            } : {}}
                            event={event} key={event?.id} setMenu={setMenu} setCurrentEvent={setCurrentEvent} />
            </CSSTransition>
                    ))
                }
        </>
    )
}
export default EventContainer





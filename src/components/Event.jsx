import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../constants';



const EventStyles = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 50px;
    background: rgba(255,255,255,0.7);
    text-align: center;
    padding: 30px;
    margin: 30px;
    display:inline-block;
    transition: all 400ms;
    .event{
        background: #eee;
        border-radius: 50px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        h1{
            font-size: 26px;
        }
        h3{
            font-size: 26px;
        }
        img{
            width: 100px;
            height: 70px;
            object-fit: cover;
        }
    }
`;

const Event = ({ event, setMenu,setCurrentEvent, style }) => {
    const eventClickhandler = () => {
        setCurrentEvent(event?.id);
        setMenu('events')
    }

    return (
        <EventStyles style={style}>
            <div className="event" onClick={eventClickhandler} >
                <img src={`${BASE_URL}${event?.logo}`} alt={event?.title}/>
                <h1>{event?.title}</h1>
                <span>{event?.detail}</span>
            </div>
        </EventStyles>
    )
}

export default Event





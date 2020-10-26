import React from 'react'
import styled from 'styled-components';


const EventStyles = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 50px;
    background: rgba(255,255,255,0.7);
    text-align: center;
    padding: 30px;
    margin: 30px;
    border: 2px solid #212121;

    .event{
        background: #eee;
        border-radius: 50px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    h1{
        font-size: 46px;
    }
    h3{
        font-size: 26px;
    }
`;

const Event = () => {
 console.log('Event');
    return (
        <EventStyles>
            <div className="event">
                <h1>Logo</h1>
                <h3>Evnet</h3>
                <span>Details</span>
            </div>
        </EventStyles>
    )
}

export default Event





import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../constants';


const MeetingsStyles = styled.div`
transition: all 0.2s ease;
    margin-top: 200px;
    h1{
        margin-bottom: 50px;
    }
    .meetings{
        text-align:center;
        .meeting{
            display: inline-block;
            width: 300px;
            height: 400px;
            background: #eee;
            border-radius: 20px;
            padding: 20px;
            color: #000;
            margin: 0 20px;
            span{
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
`;

const Meetings = ({ event, currentEvent }) => {


  const [meetings, setMeetings] = useState([]);

    useEffect( () => {
        (async() => {
            const res = await (await Axios.get(`${BASE_URL}/events/${currentEvent}/meetings`)).data;
            setMeetings(res);
        })();
    },[currentEvent])

    return (
        <MeetingsStyles>
            <h1>Featued Meetings</h1>
            <div className="meetings">

            {
                meetings.map((meeting) => (
                    <div className="meeting" key={meeting?.event_id}>
                        Start:<span>{meeting?.start}</span><br/><br/>
                        End:<span>{meeting?.end}</span><br/><br/>
                        Desc:<span>{meeting?.description}</span><br/><br/>
                    </div>
                ))
            }
            </div>
        </MeetingsStyles>
    )
}

export default Meetings





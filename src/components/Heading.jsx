import React from 'react'
import styled from 'styled-components';


const HeadingStyles = styled.div`
    background: #eee;
    text-align: center;
    padding: 28px;
    font-size: ${props => props.menus === 'home' ? '28px' : '14px'};
    transition: all 0.2s ease;
    z-index: 1;
    position: sticky;
    top: 0;


    `;

const Heading = ({ setMenu, menus, setCurrentEvent }) => {

    const headingClickHandler = () => {
        setMenu('home');
        setCurrentEvent(null);
    }

    return (
        <HeadingStyles menus={menus}>
            <h1 onClick={headingClickHandler}>Marketplace</h1>
        </HeadingStyles>
    )
}

export default Heading





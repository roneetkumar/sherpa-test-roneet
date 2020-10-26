import React from 'react'
import styled from 'styled-components';


const NavStyles = styled.nav`
    padding: 20px;
    border-radius: 20px;
    background: #eee;
    width: max-content;
    .items{
        background: #fff;
        padding: 10px 40px;
        font-size: 22px;
        border-radius: 40px;
        margin: 10px 0;
        text-align: center
    }
`

const Nav = () => {
 console.log('header');
    return (
        <NavStyles>
            <div className="items">Companies</div>
            <div className="items">Members</div>
            <div className="items">Studio</div>
            <div className="items">Events</div>
            <div className="items">Meetings</div>
        </NavStyles>
    )
}

export default Nav





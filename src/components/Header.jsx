import React from 'react'
import styled from 'styled-components';


const HeaderStyles = styled.header`
    background: #808080;
    height: 350px;
    text-align: center;
    padding: 30px 0;
    h1{
        font-size: 46px;
    }
    h3{
        font-size: 26px;
    }
`;

const Header = ({ menus}) => {
 console.log('header');
    return (
        <HeaderStyles>
            <h1>Hero</h1>
            <h3>Content-Image</h3>
        </HeaderStyles>
    )
}

export default Header





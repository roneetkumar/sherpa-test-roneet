import React from 'react'
import styled from 'styled-components';


const HeadingStyles = styled.div`
    background: #eee;
    text-align: center;
    padding: 28px;
    font-size: 26px;

`;

const Heading = () => {
    return (
        <HeadingStyles>
            <h1>Marketplace</h1>
        </HeadingStyles>
    )
}

export default Heading





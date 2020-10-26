import React from 'react'
import styled from 'styled-components';


const ProfileLogoStyles = styled.div`
    background: rgba(0,0,0,0.2);
    height: 130px;
    width: 130px;
    border-radius:50%;
    text-align: center;
    display: flex;
    align-items:center;
    position:fixed;
    top:20px;
    right:20px;
    span{
        font-size:24px;
    }

`;

const ProfileLogo = () => {
 console.log('header');
    return (
        <ProfileLogoStyles>
            <span>Profile Login</span>
        </ProfileLogoStyles>
    )
}

export default ProfileLogo





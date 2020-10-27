import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../constants';


const NavStyles = styled.nav`
    padding: 20px;
    border-radius: 20px;
    background: #eee;
    width: max-content;
    position:absolute;
    left: 20px;
    top: 180px;
    .items{
        background: #fff;
        padding: 10px 60px;
        font-size: 22px;
        border-radius: 40px;
        margin: 20px 0;
        text-align: center
    }
`

const Nav = ({ menus}) => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect( () => {
        (async() => {
            const res = await (await Axios.get(`${BASE_URL}/menu/${menus}`)).data;
            setMenuItems(res);
        })();
    },[menus])




 console.log('header');
    return (
        <NavStyles>
            {
                menuItems.map((item) => (
                    <div className="items" key={item}>{item}</div>
                ))
            }
        </NavStyles>
    )
}

export default Nav





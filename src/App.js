import Nav from './components/Nav';
import './App.css'
import Header from './components/Header';
import Heading from './components/Heading';
import ProfileLogo from './components/ProfileLogo';
import EventContainer from './components/EventContainer';
import styled from 'styled-components';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Meetings from './components/FeatureMeetings';

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  transform: translateY(-100px);
  text-align: center;

`


const Wrapper = styled.div`
position: relative;
.detail{
  position: absolute;
  top: 120px;
  left: 200px;
  z-index: 1;
  background: #fff;
  padding: 4px 140px;
  border-radius: 40px;
}
`


function App() {

  const [menus, setMenu] = useState('home');
  const [currentEvent, setCurrentEvent] = useState(null);

  return (
    <Wrapper>
      <ProfileLogo />
      <Heading setMenu={setMenu} menus={menus} setCurrentEvent={setCurrentEvent} />

      <CSSTransition unmountOnExit in={menus !== 'home'} timeout={400} classNames="my-details">
        <h2 className='detail'>Details</h2>
      </CSSTransition>

      <CSSTransition unmountOnExit in={menus === 'home'} timeout={400} classNames="my-header">
        <Header menus={menus} />
      </CSSTransition>

      <CSSTransition in={menus !== 'home'} timeout={400} classNames="my-nav">
        <Nav menus={menus} setMenu={setMenu} />
      </CSSTransition>

      <Main>
        <EventContainer
          setMenu={setMenu}
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
          menus={menus} />

        <CSSTransition unmountOnExit in={menus !== 'home'} timeout={400} classNames="my-meetings" >
          <Meetings currentEvent={currentEvent} />
        </CSSTransition>
      </Main>
    </Wrapper >
  );
}

export default App;

import Nav from './components/Nav';
import './App.css'
import Header from './components/Header';
import Heading from './components/Heading';
import ProfileLogo from './components/ProfileLogo';
import EventContainer from './components/EventContainer';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 900px;
  margin: auto;
  transform: translateY(-100px);

`


function App() {
  return (
    <>
      <ProfileLogo />
      <Heading />
      <Header />
      {/* <Nav /> */}
      <Main>
        <EventContainer />
      </Main>
    </>
  );
}

export default App;

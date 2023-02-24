import React from 'react';
import './SideBar.css';
import { Box, ChakraProvider, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import logo from "../assets/logo.png";
import dashboard from "../assets/DashBoard.png";
import team from "../assets/Group.png";
import ticket from "../assets/Ticket.png";
import profile from "../assets/Profile.png";
import { Link, useMatch } from "react-router-dom";

function SideBar() {
  return (
    <ChakraProvider>
      <Box className='Bar' >
        <Box className='TopIcons'>
          <Link to="/" className='Icon'>
            <Image src={logo} boxSize='6vh' />
          </Link>
          <Link to='/'>
            <div className='Icon' style={{
              background: Boolean(useMatch("/")) ? "#E5E5E5" : "rgba(250, 250, 250, 1)"
            }}>
              <Image src={dashboard} boxSize='4vh' />
              <Text textAlign='center' fontSize='95%'>Dashboard</Text>
            </div>
          </Link>
          <Link to='/team' >
            <div className='Icon' style={{
              background: Boolean(useMatch("/team/*")) ? "#E5E5E5" : "rgba(250, 250, 250, 1)"
            }}>
              <Image src={team} boxSize='4vh' />
              <Text textAlign='center'>Team</Text>
            </div>
          </Link>
          <Link to='/tickets' >
            <div className='Icon' style={{
              background: Boolean(useMatch("/tickets/*")) ? "#E5E5E5" : "rgba(250, 250, 250, 1)"
            }}>
              <Image src={ticket} boxSize='4vh' />
              <Text textAlign='center'>Tickets</Text>
            </div>
          </Link>
        </Box>
        <Box style={{
          width: "100%"
        }}>
          <Link to='/profile' >
            <div className='Icon' style={{
              background: Boolean(useMatch("/profile/*")) ? "#E5E5E5" : "rgba(250, 250, 250, 1)"
            }}>
              <Image src={profile} boxSize='6vh' />
              <Text textAlign='center'>Profile</Text>
            </div>
          </Link>
        </Box>
        
      </Box>
    </ChakraProvider>
  );
}

export default SideBar;

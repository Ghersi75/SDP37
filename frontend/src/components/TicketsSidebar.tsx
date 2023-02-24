import { Flex, Button, Text, Divider, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useLocation, useMatch } from "react-router-dom";
import add from "../assets/addIcon.svg";
import search from "../assets/searchIcon.svg";
import { Link } from "react-router-dom";
import { SidebarItems, SideBarCurrentPageTextHighlight } from "./SidebarItems";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function TicketsSidebar() {
  const route = useLocation();
  console.log(route.pathname);
  const addRoute = Boolean(useMatch("/tickets/add"));
  return (
    // Entire Sidebar container
    <Flex 
      direction="column"
      width="350px"
      height="100vh"
      background="#E5E5E5">
    {/* Tickets and Button container */}
      <Flex
        direction="row"
        alignItems="center"
        padding="20px 0px 20px 15px">
        <Link to="">
          <Text
            fontFamily="Rubik"
            fontSize="37px"
            fontWeight="light">
            Tickets
          </Text>
        </Link>
        <Link to="add">
          <Button
            variant={addRoute ? "outline" : ""}
            marginLeft="20px"
            background={addRoute ? "" : "#1D4ED8"}
            _hover={addRoute ? { background: "white"} : { background: "#215cff"}}
            borderColor={addRoute ? "#1D4ED8" : ""}
            gap="8px"
            width="100%"
          >
            <AiOutlinePlusSquare size={24} color={addRoute ? "#1D4ED8" : "white"} strokeWidth="1.5px" style={{
              borderRadius: "50px"
            }}/>
            <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontWeight="light"
            color={addRoute ? "#1D4ED8" : "white"}>
            Add Ticket
          </Text>
          </Button>
        </Link>
      </Flex>
      {/* Search Bar */}
      <Flex margin="10px 20px 10px 20px">
        <InputGroup 
          outline="black solid 1px" 
          borderRadius="5px">
          <InputLeftAddon 
            padding="0" >
            <Button 
              backgroundColor="#E5E5E5">
              <BsSearch size={24}/>
            </Button>
          </InputLeftAddon>
          <Input 
            paddingLeft="5px"
            placeholder="Search" 
            _focus={{ outlineWidth: 0}} />
        </InputGroup>
      </Flex>
      {/* Ticket Menu Options */}
      <Flex 
        padding="30px 20px"
        gap="10px"
        direction="column"
      >
        {SidebarItems.map((item, index) => {
          return(
            <>
              {item.divider ? 
                <Divider 
                  borderColor="#525252" 
                  my={5} 
                /> 
                : 
                <Link to={item?.attributes?.href}>
                  <Text
                    key={index}
                    fontFamily="Rubik"
                    fontSize="20px"
                    fontStyle="normal"
                    color={route.pathname === item?.attributes?.href ? SideBarCurrentPageTextHighlight : "black" }>
                    {item?.attributes?.text}
                  </Text>
                </Link>
              }
            </>
          )
        })}
      </Flex>
    </Flex>
  )
}














{/* <Link to="">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color={route.pathname === "/tickets" ? "#1D4ED8" : "black" }>
            All Tickets
          </Text>
        </Link>
        <Divider 
          borderColor="#525252" 
          my={5} 
        />
        <Link to="unassigned">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            Unassigned Tickets
          </Text>
        </Link>
        <Link to="assigned">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            My Assigned Tickets
          </Text>
        </Link>
        <Divider 
          borderColor="#525252" 
          my={5} 
        />
        <Link to="open">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            Open
          </Text>
        </Link>
        <Link to="pending">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            Pending
          </Text>
        </Link>
        <Link to="hold">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            On Hold
          </Text>
        </Link>
        <Link to="solved">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            Solved
          </Text>
        </Link>
        <Link to="closed">
          <Text
            fontFamily="Rubik"
            fontSize="20px"
            fontStyle="normal"
            color="black">
            Closed
          </Text>
        </Link> */}
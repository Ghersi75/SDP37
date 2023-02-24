import react from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Flex, Button, Text, Divider, Input, InputGroup, InputLeftAddon, Grid, GridItem } from "@chakra-ui/react";
import TicketsSidebar from "../../components/TicketsSidebar";
import add from "../../assets/addIcon.svg";
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

type TicketDashProps = {
  pageTitle: string
}

export default function TicketsDash(props: TicketDashProps) {
  return(
    <Flex
      direction="column"
      grow="1"
      paddingX="10px"
      >
      {/* Top text and divider */}
      <Text
        fontFamily="Rubik"
        fontSize="37px"
        fontWeight="light"
        margin="20px 10px">
        {props.pageTitle}
      </Text>
      <Divider 
          borderColor="#525252" 
        />
      {/* Filter tickets and divider */}
      <Button
        variant="outline"
        margin="20px 10px"
        borderColor="#1D4ED8"
        gap="8px"
        width="fit-content"
      >
        <AiOutlinePlusSquare size={24} color="#1D4ED8" strokeWidth="1.5px" style={{
          borderRadius: "50px"
        }}/>
        <Text
          fontFamily="Rubik"
          fontSize="20px"
          fontWeight="light"
          color="#1D4ED8"
        >
          Filter Tickets
        </Text>
      </Button>
      <Divider 
        borderColor="#525252" 
      />
      {/* Tickets counter and pages counter */}
      <Flex
        direction="row"
        justifyContent="space-between"
        margin="20px 15px"
      >
        <Text
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          color="black"
        >
          n Tickets
        </Text>
        <Flex
          direction="row"
          gap="15px"
        >
          <AiOutlineArrowLeft size={24} color="black"/>

          <Text
            fontFamily="Rubik"
            fontSize="16px"
            fontStyle="normal"
            color="black"
          >
            1 2 3 4 ... 15
          </Text>

          <AiOutlineArrowRight size={24} color="black"/>
        </Flex>
      </Flex>
      <Divider 
        borderColor="#525252" 
      />
      {/* Ticket Labels */}
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(20, 1fr)"
        margin="20px 10px">
          <GridItem
            colSpan={1}>
            <AiOutlinePlusSquare 
              size={24} 
              color="black" 
              strokeWidth="1.5px" 
              style={{
                borderRadius: "50px"
            }}/>
          </GridItem>
          <GridItem colSpan={4}>
            <Text
              fontFamily="Rubik"
              fontSize="16px"
              fontStyle="normal"
              color="black">
              Requester
            </Text>
          </GridItem>
          <GridItem colSpan={5}>
            <Text
              fontFamily="Rubik"
              fontSize="16px"
              fontStyle="normal"
              color="black">
              Subject
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Text
              fontFamily="Rubik"
              fontSize="16px"
              fontStyle="normal"
              color="black">
              Assignee
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Text
              fontFamily="Rubik"
              fontSize="16px"
              fontStyle="normal"
              color="black">
              Status
            </Text>
          </GridItem>
          <GridItem colSpan={4}>
            <Text
              fontFamily="Rubik"
              fontSize="16px"
              fontStyle="normal"
              color="black">
              Last Updated
            </Text>
          </GridItem>
      </Grid>
      <Divider 
        borderColor="#525252" 
        // mx="20px"
        // paddingX="20px"
      />
    </Flex>
  )
}
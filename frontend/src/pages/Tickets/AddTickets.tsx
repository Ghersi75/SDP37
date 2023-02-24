import react from "react";
import { Route, Routes, Link } from "react-router-dom";
import TicketsSidebar from "../../components/TicketsSidebar";
import { Flex, Text, Divider, Input, Textarea, Button } from "@chakra-ui/react";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function AddTickets() {
  return(
    <Flex 
      direction="column"
      grow="1"
      paddingX="10px"
      >
      <Text
        fontFamily="Rubik"
        fontSize="37px"
        fontWeight="light"
        margin="20px 10px">
        Add Ticket
      </Text>
      <Divider 
        borderColor="#525252" 
      />

      {/* Subject */}
      <Flex direction="column"
        marginX="10px"
        gap="10px">
        <Text
          fontFamily="Rubik"
          fontSize="30px"
          fontWeight="light"
          marginTop="20px">
          Subject
        </Text>
        <Input 
          placeholder="Enter Ticket Subject"
          fontFamily="Rubik"
          fontSize="20px"
          fontWeight="light"
          borderColor="#525252"
          textColor="#525252"/>
      </Flex>

      {/* Requester */}
      <Flex direction="column"
        marginX="10px"
        gap="10px">
        <Text
          fontFamily="Rubik"
          fontSize="30px"
          fontWeight="light"
          marginTop="20px">
          Requester
        </Text>
        <Flex direction="row" gap="10px">
          <Input 
            placeholder="Enter Requester First Name"
            fontFamily="Rubik"
            fontSize="20px"
            fontWeight="light"
            borderColor="#525252"
            textColor="#525252"/>
          <Input 
            placeholder="Enter Requester Last Name"
            fontFamily="Rubik"
            fontSize="20px"
            fontWeight="light"
            borderColor="#525252"
            textColor="#525252"/>
        </Flex>
      </Flex>

      {/* Description */}
      <Flex direction="column"
        marginX="10px"
        gap="10px">
        <Text
          fontFamily="Rubik"
          fontSize="30px"
          fontWeight="light"
          marginTop="20px">
          Description
        </Text>
        <Textarea 
          placeholder="Enter Ticket Description"
          fontFamily="Rubik"
          fontSize="20px"
          fontWeight="light"
          borderColor="#525252"
          textColor="#525252"
          resize="vertical"
          maxHeight="240px"/>
      </Flex>

      {/* Create Ticket Button */}
      <Flex 
        justifyContent="center">
        <Button
          marginX="20px"
          marginY="20px"
          background="#1D4ED8"
          _hover={{ background: "#215cff" }}
          gap="8px"
          width="fit-content"
        >
          <AiOutlinePlusSquare size={30} color={"white"} strokeWidth="1px" style={{
            borderRadius: "50px"
          }}/>
          <Text
          fontFamily="Rubik"
          fontSize="25px"
          fontWeight="light"
          color={"white"}>
            Create Ticket
          </Text>
        </Button>  
      </Flex>
      
    </Flex>
    
  )
}
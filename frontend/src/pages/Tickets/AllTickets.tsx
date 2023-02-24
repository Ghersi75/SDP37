import react from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Flex, Button, Text, Divider, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import TicketsSidebar from "../../components/TicketsSidebar";
import TicketsDash from "./TicketsDash";

export default function AllTickets() {
  return(
    <TicketsDash pageTitle="All Tickets" />
  )
}
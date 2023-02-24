import { Route, Routes } from "react-router-dom"
import { Flex } from "@chakra-ui/react";
import TicketsSidebar from "../components/TicketsSidebar";
import AddTickets from "./Tickets/AddTickets";
import AllTickets from "./Tickets/AllTickets";
import AssignedTickets from "./Tickets/AssignedTickets";
import ClosedTickets from "./Tickets/ClosedTickets";
import OnHoldTickets from "./Tickets/OnHoldTickets";
import OpenTickets from "./Tickets/OpenTickets";
import PendingTickets from "./Tickets/PendingTickets";
import SolvedTickets from "./Tickets/SolvedTickets";
import UnassignedTickets from "./Tickets/UnassignedTickets";

export default function TicketsMain() {
  return(
    <Flex 
      direction="row"
      width="100vw">
      <TicketsSidebar />
      <Routes>
        <Route path="" element={<AllTickets />} />
        <Route path="add" element={<AddTickets />} />
        <Route path="unassigned" element={<UnassignedTickets />} />
        <Route path="assigned" element={<AssignedTickets />} />
        <Route path="open" element={<OpenTickets />} />
        <Route path="pending" element={<PendingTickets />} />
        <Route path="hold" element={<OnHoldTickets />} />
        <Route path="solved" element={<SolvedTickets />} />
        <Route path="closed" element={<ClosedTickets />} />
        <Route path="*" element={<div> Nothing bruh </div>} />
      </Routes>
    </Flex>
  )
}
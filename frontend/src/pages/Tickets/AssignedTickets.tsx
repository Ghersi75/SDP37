import react from "react";
import { Route, Routes, Link } from "react-router-dom";
import TicketsSidebar from "../../components/TicketsSidebar";
import TicketsDash from "./TicketsDash";

export default function AssignedTickets() {
  return(
    <TicketsDash pageTitle="Assigned Tickets" />
  )
}
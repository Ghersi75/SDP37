import { Route, Routes, useMatch, useLocation } from "react-router-dom"
import TicketsSidebar from "./components/TicketsSidebar";
import AllTickets from "./pages/Tickets/AllTickets";
import TicketsMain from "./pages/TicketsMain";
import Sidebar from "./components/MainSidebar";
import flex, { Flex } from "@chakra-ui/react";

function App() {
  // const route = useMatch("/tickets/*");
  const location = useLocation();
  return(
    <Flex
      direction="row">
    {/* {Boolean(route) ? "Tickets" : "Not Tickets"} */}
      {/* <div> Current Route: {location.pathname} </div> */}
      <Sidebar />
      <Routes>
        <Route path="tickets/*" element={<TicketsMain />} />
      </Routes>
    </Flex>
  )
}

export default App;
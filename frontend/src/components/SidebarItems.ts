type SidebarItemsType = {
  divider?: boolean,
  attributes?: {
    text: string,
    href: string
  }
}

const SideBarCurrentPageTextHighlight = "#1D4ED8"

const SidebarItems = [{
    attributes: {
      text: "All Tickets",
      href: "/tickets",
    }
  }, {
    divider: true  
  }, {
    attributes: {
      text: "Unassigned Tickets",
      href: "/tickets/unassigned"
    }
  }, {
    attributes: {
      text: "Assigned Tickets",
      href: "/tickets/assigned"
    }
  }, {
    divider: true  
  }, {
    attributes: {
      text: "Open",
      href: "/tickets/open"
    }
  }, {
    attributes: {
      text: "Pending",
      href: "/tickets/pending"
    }
  }, {
    attributes: {
      text: "On Hold",
      href: "/tickets/hold"
    }
  }, {
    attributes: {
      text: "Solved",
      href: "/tickets/solved"
    }
  }, {
    attributes: {
      text: "Closed",
      href: "/tickets/closed"
    }
  }
]

export { SidebarItems, SideBarCurrentPageTextHighlight }
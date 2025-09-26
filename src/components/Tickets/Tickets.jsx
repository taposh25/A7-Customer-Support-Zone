import React, { useEffect, useState } from 'react'
import TicketCard from '../TicketCard/TicketCard'

const Tickets = ({ ticketsPromise, handleAddToProgress }) => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    ticketsPromise.then(data => setTickets(data)).catch(err => console.error(err))
  }, [ticketsPromise])

  return (
    <div className="space-y-4">
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          handleAddToProgress={handleAddToProgress}
        />
      ))}
    </div>
  )
}

export default Tickets

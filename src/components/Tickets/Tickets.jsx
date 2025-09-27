import React, { useEffect, useState } from 'react'
import TicketCard from '../TicketCard/TicketCard'

const Tickets = ({ ticketsPromise, handleAddToProgress }) => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    ticketsPromise.then(data => setTickets(data)).catch(err => console.error(err))
  }, [ticketsPromise])

  return (

  <div >
         <h3 className="font-semibold text-xl mb-3">Customer Tickets</h3>


      <div className="  grid grid-cols-2 gap-6 ">
      
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          handleAddToProgress={handleAddToProgress}
        />
      ))}
    </div>
  </div>
    
 
  )
}

export default Tickets

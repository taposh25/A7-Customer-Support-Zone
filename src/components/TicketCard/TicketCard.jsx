import React from 'react'

const TicketCard = ({ ticket, handleAddToProgress }) => {
  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => handleAddToProgress(ticket)}
    >
      <h3 className="font-bold">{ticket.title}</h3>
      <p className="text-sm">{ticket.description}</p>
      <p className="text-gray-500">Customer: {ticket.customer}</p>
      <p className="text-gray-500">Priority: {ticket.priority}</p>
      <p className="text-gray-500">Status: {ticket.status}</p>
      <p className="text-gray-400 text-xs">Created: {ticket.createdAt}</p>
    </div>
  )
}

export default TicketCard

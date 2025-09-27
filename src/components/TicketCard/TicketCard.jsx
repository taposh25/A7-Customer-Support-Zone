// import React from 'react'

// const TicketCard = ({ ticket, handleAddToProgress }) => {
//   return (
//     <div
//       className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
//       onClick={() => handleAddToProgress(ticket)}
//     >
//       <div className='flex justify-between items-center mb-3'>
//         <h3 className="font-bold">{ticket.title}</h3>
//         <button className='btn rounded-3xl bg-green-300'>{ticket.status}</button>
//       </div>
//        <p className="text-sm mb-3">{ticket.description}</p>
//         <div className='flex justify-between'>
//             <p>#{ticket.id}</p>
//              <p className="text-gray-500">Priority: {ticket.priority}</p>
//             <p className="text-gray-500">Customer: {ticket.customer}</p>
           
//              <p className="text-gray-400 text-xs">Created: {ticket.createdAt}</p>

//         </div>
    
//     </div>
//   )
// }

// export default TicketCard


 import React from 'react'

 const TicketCard = ({ ticket, handleAddToProgress }) => {
   
   const priorityColor =
     ticket.priority === 'High'
       ? 'text-red-500'
       : ticket.priority === 'Medium'
      ? 'text-yellow-500'
         : ticket.priority === 'Low'
         ? 'text-green-500'
         : 'text-gray-500'
    return (
     <div
       className="p-4 border rounded shadow hover:shadow-lg cursor-pointer grid col-span-6"
       onClick={() => handleAddToProgress(ticket)}
     >
       <div className='flex justify-between items-center mb-3'>
         <h3 className="font-bold">{ticket.title}</h3>
         <button className='btn rounded-3xl bg-green-300'>{ticket.status}</button>
       </div>
      
       <p className="text-sm mb-3">{ticket.description}</p>
      
       <div className='flex justify-between flex-wrap gap-2'>
         <p>#{ticket.id}</p>
         <p className={priorityColor}>Priority: {ticket.priority}</p>
         <p className="text-gray-500">Customer: {ticket.customer}</p>
         <p className="text-gray-400 text-xs">Created: {ticket.createdAt}</p>
       </div>
     </div>
   )
 }

 export default TicketCard






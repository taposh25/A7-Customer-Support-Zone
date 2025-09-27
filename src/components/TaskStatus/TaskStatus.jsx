import React from 'react'

const TaskStatus = ({ inProgress, handleComplete }) => {
  return (
    <div >
      <h3 className="font-semibold text-xl mb-3">Task Status</h3>
      <p className='text-[12px] text-gray-500'>Select a ticket to add to Task Status</p>
      {inProgress.length === 0 ? (
        <p>No resolved tasks yet.</p>
      ) : (
        inProgress.map(ticket => (
          <div key={ticket.id} className="p-3 border rounded mb-2 flex justify-between items-center">
            <p className="font-semibold">{ticket.title}</p>
            <button
              className="btn btn-success btn-sm"
              onClick={() => handleComplete(ticket.id)}
            >
              Complete
            </button>
            
          </div>
          
           
          
        ))
      )}
    </div>
    
  )
}

export default TaskStatus

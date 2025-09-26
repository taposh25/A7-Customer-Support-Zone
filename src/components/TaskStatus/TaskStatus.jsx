import React from 'react'

const TaskStatus = ({ inProgress, handleComplete }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">Task Status</h2>
      {inProgress.length === 0 ? (
        <p>No tasks in progress</p>
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

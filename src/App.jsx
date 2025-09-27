import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tickets from './components/Tickets/Tickets'
import TaskStatus from './components/TaskStatus/TaskStatus'
import Footer from './components/Footer/Footer'
import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const fetchTickets = async () => {
  const res = await fetch('/Tickets.json')  
  if(!res.ok) throw new Error('Failed to fetch tickets')
  return res.json()
}

const ticketsPromise = fetchTickets()

function App() {
  const [inProgress, setInProgress] = useState([])
  const [resolved, setResolved] = useState([])

  const handleAddToProgress = (ticket) => {
    if (inProgress.find(t => t.id === ticket.id)) {
      toast.info('Ticket already in progress')
      return
    }
    setInProgress([...inProgress, ticket])
    toast.success('Ticket added to In Progress')
  }

  const handleComplete = (id) => {
    const ticket = inProgress.find(t => t.id === id)
    setInProgress(inProgress.filter(t => t.id !== id))
    setResolved([...resolved, { ...ticket, status: 'Resolved' }])
    toast.success(`Ticket "${ticket.title}" marked as Resolved`)
  }


  
  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto my-6 ">
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Tickets ticketsPromise={ticketsPromise} handleAddToProgress={handleAddToProgress} />
        </Suspense>
        

        <TaskStatus
          inProgress={inProgress}
          handleComplete={handleComplete}
        />
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App

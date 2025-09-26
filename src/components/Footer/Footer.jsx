import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets.jsx";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import Footer from "./components/Footer/Footer";
import { fetchTickets } from "./components/Tickets/fetchTickets"; // correct path

const ticketsPromise = fetchTickets();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto my-6">
        <Tickets
          ticketsPromise={ticketsPromise}
          inProgress={inProgress}
          setInProgress={setInProgress}
        />

        <TaskStatus
          inProgress={inProgress}
          setInProgress={setInProgress}
          resolved={resolved}
          setResolved={setResolved}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;

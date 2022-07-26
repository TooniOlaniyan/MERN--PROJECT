import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestionCircle , FaTicketAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
    <section className='heading'>
      <h1>How May We Help You?</h1>
      <p>Please Choose From Any Options Below </p>
    <Link to='/new-ticket' className='btn btn-reverse btn-block'>
      <FaQuestionCircle/> Create New Ticket
    </Link>
    <Link to='/ticket' className='btn btn-block'>
      <FaTicketAlt/> View My Ticket
    </Link>
    </section>
    </>
  )
}

export default Home
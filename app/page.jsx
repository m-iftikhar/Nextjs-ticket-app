import React from 'react'
import TicketCard from './(components)/TicketCard'

const page = () => {
  return (
    <div className='p-5'>
      <div className='grid lg:grid-cols-2 xl:grid-cols-4'>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      
      </div>
    </div>
  )
}

export default page
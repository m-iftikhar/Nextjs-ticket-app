import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover p-3 m-2 rounded-md shadow-lg'>
      <div className='flex mb-3'>  
          <PriorityDisplay/>
           <div className='ml-auto'>  
        <DeleteBlock/>
           </div>
      </div>
      <h4 className="mb-1">ticket title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">this is my ticket description</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">8/12/2025</p>
            <ProgressDisplay  />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay />
          </div>
        </div>
    </div>
  )
}

export default TicketCard
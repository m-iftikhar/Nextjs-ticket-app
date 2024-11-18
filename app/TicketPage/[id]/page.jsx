import React from 'react';

const TicketPage = ({ params }) => {
  const { ticketId } = params; // Destructure ticketId from params if params is an object

  return (
    <div>Ticket {ticketId}</div>
  );
};

export default TicketPage;

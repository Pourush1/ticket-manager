import { cache } from 'react';
import { prisma } from '@/lib/prisma';

export const getTicket = cache(async (id: string) => {
  console.log('get ticket should be logged in the terminal', id);
  const ticket = await prisma.ticket.findUnique({
    where: {
      id,
    },
  });
  consoe.log('ticket', ticket);
  return ticket;
});

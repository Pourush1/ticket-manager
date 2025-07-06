import { prisma } from '@/lib/prisma';
import { Ticket } from '../types';

export const getTickets = async (): Promise<Ticket[]> => {
  const tickets = await prisma.ticket.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return tickets;
};

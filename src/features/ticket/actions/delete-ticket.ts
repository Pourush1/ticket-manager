'use server';

import { prisma } from '@/lib/prisma';

export const deleteTicket = async (id: string) => {
  console.log('delete ticket should be logged in the terminal');
  await prisma.ticket.delete({
    where: { id },
  });
};

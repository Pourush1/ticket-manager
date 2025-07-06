'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (id: string) => {
  console.log('delete ticket should be logged in the terminal');
  await prisma.ticket.delete({
    where: { id },
  });
  redirect(ticketsPath());
};

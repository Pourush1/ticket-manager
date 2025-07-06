import { Suspense } from 'react';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';

const Tickets = async () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets are listed here" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default Tickets;

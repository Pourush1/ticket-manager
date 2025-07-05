import Link from 'next/link';
import { Heading } from '@/components/heading';
import { ticketsPath } from '@/paths';

const Home = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading
        title="Home"
        description="Your home place for managing tickets"
      />
      <div className="flex flex-col items-center flex-1">
        <Link href={ticketsPath()} className="text-sm underline">
          Go To Tickets Page
        </Link>
      </div>
    </div>
  );
};

export default Home;

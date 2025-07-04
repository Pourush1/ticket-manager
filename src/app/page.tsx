import Link from 'next/link';
import { ticketsPath } from '@/paths';

const Home = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <p className="text-sm text-muted-foreground">
          Your home place for managing tickets
        </p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <Link href={ticketsPath} className="text-sm underline">
          Go To Tickets Page
        </Link>
      </div>
    </div>
  );
};

export default Home;

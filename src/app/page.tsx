import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Ticket Manager App</h1>
      <Link href="/tickets" className="text-sm underline">
        Go To Tickets Page
      </Link>
    </div>
  );
};

export default Home;

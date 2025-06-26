import Link from "next/link";
import { ticketsPath } from "@/paths";

const Home = () => {
  return (
    <div>
      <Link href={ticketsPath} className="text-sm underline">
        Go To Tickets Page
      </Link>
    </div>
  );
};

export default Home;

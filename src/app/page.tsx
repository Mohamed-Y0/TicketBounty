import Link from "next/link";
import Heading from "@/components/Heading";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title={"Home page"} description={"Your home place to start"} />

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go To Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

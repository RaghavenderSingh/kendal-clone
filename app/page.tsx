import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-3">
      <Navbar />
      <div className="relative overflow-hidden pt-10 pb-40 md:pt-20 dark:bg-black">
        <Landing />
      </div>
    </div>
  );
}

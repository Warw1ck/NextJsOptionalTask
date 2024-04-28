import Link from "next/link";
import { Link as LucideLink } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl font-bold mb-8">Hello, Friend!</h1>
      {!user && (
        <div className="flex items-center">
          <Link
            href="/sign-in"
            className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mr-4 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out"
          >
            <LucideLink size={24} />
            <span className="ml-2">Sign In</span>
          </Link>
          <h2 className="text-white text-xl">or</h2>
          <Link
            href="/sign-up"
            className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full ml-4 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out"
          >
            <LucideLink size={24} />
            <span className="ml-2">Sign Up</span>
          </Link>
        </div>
      )}
    </div>
  );
}

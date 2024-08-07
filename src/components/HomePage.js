import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <div className="absolute top-4 right-4">
        <PageNav />
      </div>
      <section className="text-center p-32 bg-gray-200 shadow-md rounded-lg max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">
          You solve the quiz.
          <br />
          Quizzler keeps track of your adventures.
        </h1>
        <h2 className="text-xl mb-6">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        {/* <Link
          to="/login"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Start Quiz Now
        </Link> */}
          <button  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out" onClick={() => loginWithRedirect()}>Start Quiz</button>
      </section>
    </main>
  );
}

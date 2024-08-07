import React from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import User from "./User";

export default function Quizzes() {
  const location = useLocation();

  // Check if the current path is exactly '/quizzes'
  const isAtQuizzesRoot = location.pathname === "/quizzes";

  return (
    <div className="container mx-auto p-4" >
        <User/>
      {isAtQuizzesRoot && (
        <div>
          <h1 className="text-3xl font-bold mb-6">Select a Quiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 center">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-600">React Quiz</h2>
              <NavLink to="react">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Start
                </button>
              </NavLink>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-600">JavaScript Quiz</h2>
              <NavLink to="javascript">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Start
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

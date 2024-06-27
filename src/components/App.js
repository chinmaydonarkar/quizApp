import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Homepage from "./HomePage";
import Quizes from "./Quizes";
import ReactQuiz from "./ReactQuiz";
import JavascriptQuiz from "./JavascriptQuiz";
import { AuthProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { QuizProvider } from "../contexts/QuizContext";

const App = () => {
  return (
    <AuthProvider>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="quizes"
              element={
                <ProtectedRoute>
                  <Quizes />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="react" />} />
              <Route path="react" element={<ReactQuiz />} />
              <Route path="javascript" element={<JavascriptQuiz />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </AuthProvider>
  );
};

export default App;

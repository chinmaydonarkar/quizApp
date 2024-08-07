import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Homepage from "./HomePage";
import Quizzes from "./Quizzes";
import ReactQuiz from "./ReactQuiz";
import JavascriptQuiz from "./JavascriptQuiz";
import { AppProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { QuizProvider } from "../contexts/QuizContext";
import { Auth0Provider } from '@auth0/auth0-react';



const App = () => {
  return (
     <AppProvider>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="quizzes"
              element={
               <ProtectedRoute>
                  <Quizzes />
               </ProtectedRoute>
              }
            >
              {/* <Route index element={<Navigate replace to="react" />} /> */}
              <Route path="react" element={<ReactQuiz />} />
              <Route path="javascript" element={<JavascriptQuiz />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
     </AppProvider>
    
  );
};

export default App;

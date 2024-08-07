// import React from 'react';
// import Main from "./Main";
// import Loader from "./Loader";
// import Error from "./Error";
// import StartScreen from "./StartScreen";
// import Question from "./Question";
// import NextButton from "./NextButton";
// import Progress from "./Progress";
// import FinishScreen from "./FinishScreen";
// import Footer from "./Footer";
// import Timer from "./Timer";
// import { useQuiz } from "../contexts/QuizContext";


// const Quiz = ({ status, config }) => {

    
//     return (
//     <Main>
//       {status === "loading" && <Loader />}
//       {status === "error" && <Error />}
//       {status === "ready" && <StartScreen />}
//       {status === "active" && (
//         <>
//           <Progress />
//           <Question />
//           <Footer>
//             <Timer />
//             <NextButton />
//           </Footer>
//         </>
//       )}
//       {status === "finished" && <FinishScreen />}
//     </Main>
//   );
// }

//   export default Quiz 


import React, { useEffect } from "react";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";
import User from "./User";

export default function Quiz({quizType}) {
  const { status, dispatch, shuffleArray} = useQuiz();

  useEffect(() => {
    dispatch({ type: "dataRequest" }); // Optional: if you want to set a status for loading
    fetch(`http://localhost:5000/questions`)
      .then((res) => res.json())
      .then((data) => {

        data = shuffleArray(data);
        return dispatch({ type: "dataReceived", payload: data})
      
      })
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, [dispatch]);


// ----> No need of this function as we are already managing this in StartScreen component
  // const handleStart = () => {
  //   dispatch({ type: "start" });
  // };

  return (
    <div className="app place-items-center mt-32 mx-96">
      {/* <User/> */}
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {/* {status === "ready" && <StartScreen onStart={handleStart} />} */} 
        {status === "ready" && <StartScreen />}

        {status === "active" && (
          <>
            <Progress/>
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

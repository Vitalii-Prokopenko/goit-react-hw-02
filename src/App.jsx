import { useState, useEffect } from "react";
// import components
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";
// import styles
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  // variables
  const feedbackKeys = Object.keys(feedback);
  const feedbackValues = Object.values(feedback);

  const totalFeedback = feedbackValues.reduce((previousValue, value) => {
    return previousValue + value;
  }, 0);

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  // methods
  const updateFeedback = (option) => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        options={feedbackKeys}
        total={totalFeedback}
        onLeaveFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedbackValues}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;

import React from 'react';
import { useState } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

import styles from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Number(
    ((good / countTotalFeedback) * 100).toFixed(0)
  );

  return (
    <div className={styles.container}>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
      </div>
      <div>
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;

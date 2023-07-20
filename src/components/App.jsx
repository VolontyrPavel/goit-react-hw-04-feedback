import { Section } from './Section/Section';
import { FeedbackOptions } from './Section/FeedbackOptions';
import { Notification } from './Section/Notification';
import { Statistics } from './Section/Statistics';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ClickOnBtn = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const positivePercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <>
      <Section title={'Please leave feetback'}>
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={ClickOnBtn}
        />
      </Section>

      <Section title="Statitics">
        {countTotalFeedback === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

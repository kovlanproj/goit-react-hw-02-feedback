import React, { Component } from 'react';
import { Statistics } from './Feedback';
import { FeedbackOptions } from './Feedback';
import { Section } from './Feedback';
import { Notification } from './Feedback';
import { Container } from './App.styled.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedbacks = () => {
    const values = Object.values(this.state);
    return values.reduce((prevValue, value) => prevValue + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!totalFeedbacks ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positiveFeedbacks}
            />
          )}
        </Section>
      </Container>
    );
  }
}

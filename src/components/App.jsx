import React, { Component } from 'react';
import { Statistics } from './Feedback';
import { FeedbackOptions } from './Feedback';
import { Section } from './Feedback';
import { Notification } from './Feedback';
import { Container } from './App.styled.js';

// export const App = () => {
//   return <Feedback />;
// };

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

    let total = 0;

    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    // console.log(typeof this.state.good);
    return Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedbacks() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

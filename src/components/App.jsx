import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
// import { styled } from '../components/App.styled';
import { Statistics } from '../components/Statictics/Statistics';
import { StatisticsTitle, StatisticsCard } from '../components/Statictics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';
import { Section } from './Section/Section';


export class Feedback extends React.Component{
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
    }  
    handleIncrement = (e) => {

        let curentfeedback = e.currentTarget.name;

        this.setState((prevState) => ({[curentfeedback] : prevState[curentfeedback] + 1}))
    }

    countTotalFeedback=() => {
        let countTotal = this.state.good + this.state.neutral + this.state.bad;

        return countTotal;

    }

    countPositiveFeedbackPercentage = () =>{
        let percentageGood = Math.round(this.state.good / this.countTotalFeedback() * 100);
        
        return percentageGood;

    }

    render() {
        let totalFeedback = this.countTotalFeedback();
        return (
          <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
              }}
            >
        <Section title = "Please leave feedback">
                {/* <Title> Please leave feedback </Title> */}
                <FeedbackOptions
                    options = {Object.keys(this.state)}
                    addFeedback ={this.handleIncrement}
                ></FeedbackOptions>
    
<StatisticsCard>
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    {totalFeedback === 0
                        ? <Notification message="There is no feedback"></Notification>
                        : <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            totalFeedback={this.countTotalFeedback()}
                            percentage={this.countPositiveFeedbackPercentage()}  
                            >
                        </Statistics>}
                
                </StatisticsCard>
        </Section>
        </div>
    )}
}

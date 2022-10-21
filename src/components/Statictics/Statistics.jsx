import {StatisticsFeedback, StatisticsValue, RezultContainer } from './Statistics.styled';
import PropTypes from 'prop-types';



export const Statistics = ({good, neutral, bad, totalFeedback, percentage  }) => {
    return (
            <li>
                    <StatisticsFeedback>
                        <StatisticsValue>Good: {good}</StatisticsValue>
                        <StatisticsValue>Neutral: {neutral}</StatisticsValue>
                        <StatisticsValue>Bad: {bad}</StatisticsValue>
                    </StatisticsFeedback>
                    <RezultContainer>
                        <p>Total: {totalFeedback}</p>
                        <p>Positive feedback: {percentage}%</p>
                    </RezultContainer>
            </li>
                
        
        
    )
}

Statistics.propTypes = {
    ValueGood: PropTypes.number.isRequired,
    ValueNeutral: PropTypes.number.isRequired,
    ValueBad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
    
}
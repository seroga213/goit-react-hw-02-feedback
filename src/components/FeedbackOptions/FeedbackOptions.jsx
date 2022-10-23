import React from "react";
import PropTypes from 'prop-types';
import { Container, ContainerListBtm, ContainerList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
    
    return (
        <Container>
            {options.map(item => (
                <ContainerList key={item} >
                    <ContainerListBtm type="button" name={item} onClick={addFeedback}>{item}
                    </ContainerListBtm>
                </ContainerList>
            ))}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    addFeedback: PropTypes.func.isRequired,
}
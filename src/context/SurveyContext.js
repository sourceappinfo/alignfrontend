// src/context/SurveyContext.js

import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { submitSurveyResponses } from 'services/api'; // Use 'services' alias for API

// Create the SurveyContext
const SurveyContext = createContext();

// Custom hook to access the SurveyContext
export const useSurvey = () => useContext(SurveyContext);

// Survey Provider Component
export const SurveyProvider = ({ children }) => {
  // State for user's responses and current question index
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submissionError, setSubmissionError] = useState(null); // For handling errors

  // Function to handle updating responses
  const updateResponse = (questionId, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answer,
    }));
  };

  // Navigate to the next question
  const nextQuestion = () => setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

  // Navigate to the previous question
  const previousQuestion = () => setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));

  // Submit all responses to the backend
  const submitResponses = async () => {
    try {
      await submitSurveyResponses(responses);
      console.log('Survey responses submitted successfully');
      setResponses({});
      setCurrentQuestionIndex(0);
      setSubmissionError(null); // Clear any errors upon success
    } catch (error) {
      console.error('Error submitting survey responses:', error);
      setSubmissionError('Failed to submit responses. Please try again.');
    }
  };

  // Value provided by SurveyContext
  const value = {
    responses,
    updateResponse,
    currentQuestionIndex,
    nextQuestion,
    previousQuestion,
    submitResponses,
    submissionError,
  };

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  );
};

SurveyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SurveyContext;

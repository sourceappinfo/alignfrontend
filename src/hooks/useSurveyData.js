import { useState } from 'react';
import axios from 'axios'; // For API calls once backend is connected

const useSurveyData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitSurveyData = async (surveyData) => {
    setLoading(true);
    setError(null);
    try {
      // Replace the URL with the actual API endpoint
      await axios.post('https://api.example.com/survey', surveyData);
    } catch (err) {
      setError(err.message || 'Failed to submit survey');
    } finally {
      setLoading(false);
    }
  };

  return { submitSurveyData, loading, error };
};

export default useSurveyData;

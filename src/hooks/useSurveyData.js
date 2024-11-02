import { useState, useEffect } from 'react';
import { surveys } from 'services/api';

const useSurveyData = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch survey questions on component mount
  useEffect(() => {
    const fetchSurveyData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch survey questions from the backend API
        const response = await surveys.getSurveys();
        setSurveyData(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load survey data');
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, []);

  // Submit survey responses to the backend
  const submitSurveyData = async (responses) => {
    setLoading(true);
    setError(null);
    try {
      // Submit the responses to the backend API
      await surveys.submit(responses);
    } catch (err) {
      setError(err.message || 'Failed to submit survey');
    } finally {
      setLoading(false);
    }
  };

  return { surveyData, submitSurveyData, loading, error };
};

export default useSurveyData;

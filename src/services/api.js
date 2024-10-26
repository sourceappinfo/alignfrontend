const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const SurveyAPI = {
  async submitSurvey(surveyData) {
    try {
      const response = await fetch(`${API_BASE_URL}/surveys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any auth headers here
        },
        body: JSON.stringify(surveyData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit survey');
      }

      return await response.json();
    } catch (error) {
      console.error('Survey submission error:', error);
      throw error;
    }
  },

  async saveDraft(userId, surveyData) {
    try {
      const response = await fetch(`${API_BASE_URL}/surveys/draft/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });

      if (!response.ok) {
        throw new Error('Failed to save draft');
      }

      return await response.json();
    } catch (error) {
      console.error('Draft saving error:', error);
      throw error;
    }
  },
};

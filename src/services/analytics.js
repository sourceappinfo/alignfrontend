import Analytics from '@react-native-firebase/analytics';

export const AnalyticsService = {
  trackScreenView: async (screenName) => {
    try {
      await Analytics().logScreenView({
        screen_name: screenName,
        screen_class: screenName,
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },

  trackSurveyProgress: async (data) => {
    try {
      await Analytics().logEvent('survey_progress', {
        section_id: data.sectionId,
        section_index: data.sectionIndex,
        completion_percentage: data.progress,
        time_spent: data.timeSpent,
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },

  trackQuestionResponse: async (data) => {
    try {
      await Analytics().logEvent('question_answered', {
        question_id: data.questionId,
        question_type: data.questionType,
        response_time: data.responseTime,
        section_id: data.sectionId,
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },

  trackSurveyCompletion: async (data) => {
    try {
      await Analytics().logEvent('survey_completed', {
        total_time: data.totalTime,
        sections_completed: data.sectionsCompleted,
        response_count: data.responseCount,
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },
};

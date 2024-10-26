import { useEffect, useRef } from 'react';
import { AnalyticsService } from '../services/analytics';

export const useAnalytics = (sectionId, sectionIndex, totalSections) => {
  const startTime = useRef(Date.now());

  useEffect(() => {
    AnalyticsService.trackScreenView(`Survey_Section_${sectionId}`);
    startTime.current = Date.now();

    return () => {
      const timeSpent = (Date.now() - startTime.current) / 1000; // Convert to seconds
      AnalyticsService.trackSurveyProgress({
        sectionId,
        sectionIndex,
        timeSpent,
        progress: ((sectionIndex + 1) / totalSections) * 100,
      });
    };
  }, [sectionId, sectionIndex, totalSections]);

  const trackResponse = (questionId, questionType) => {
    AnalyticsService.trackQuestionResponse({
      questionId,
      questionType,
      responseTime: Date.now() - startTime.current,
      sectionId,
    });
  };

  return { trackResponse };
};

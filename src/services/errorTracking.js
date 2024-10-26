import * as Sentry from '@sentry/react-native';

export const ErrorTracking = {
  initialize: () => {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 1.0,
    });
  },

  logError: (error, context = {}) => {
    Sentry.captureException(error, {
      extra: context,
    });
  },

  setUserContext: (userId) => {
    Sentry.setUser({ id: userId });
  },

  addBreadcrumb: (data) => {
    Sentry.addBreadcrumb({
      category: 'survey',
      ...data,
    });
  },
};

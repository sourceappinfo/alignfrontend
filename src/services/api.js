import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base API configuration with your current IP
const BASE_URL = 'http://192.168.1.20:5000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding token
api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

// Auth APIs
export const auth = {
  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/api/auth/register', userData);
    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  forgotPassword: async (email) => {
    return await api.post('/api/auth/request-password-reset', { email });
  },

  resetPassword: async (token, newPassword) => {
    return await api.post('/api/auth/reset-password', { token, newPassword });
  },

  logout: async () => {
    await AsyncStorage.removeItem('token');
  },
};

// Survey APIs
export const surveys = {
  getSurveys: async () => {
    return await api.get('/api/surveys');
  },

  getSurveyById: async (surveyId) => {
    return await api.get(`/api/surveys/${surveyId}`);
  },

  submit: async (surveyData) => {
    return await api.post('/api/surveys', surveyData);
  },

  saveDraft: async (surveyData) => {
    return await api.post('/api/surveys/draft', surveyData);
  },

  submitResponse: async (surveyId, responseData) => {
    return await api.post(`/api/surveys/${surveyId}/responses`, responseData);
  },

  getSurveyResponses: async (surveyId) => {
    return await api.get(`/api/surveys/${surveyId}/responses`);
  },
};

// Recommendations APIs
export const recommendations = {
  getRecommendations: async () => {
    return await api.get('/api/recommendations');
  },

  saveRecommendation: async (data) => {
    return await api.post('/api/recommendations', data);
  },
};

// User APIs
export const users = {
  getProfile: async () => {
    return await api.get('/api/users/profile');
  },

  updateProfile: async (data) => {
    return await api.put('/api/users/profile', data);
  },

  updatePreferences: async (preferences) => {
    return await api.put('/api/users/preferences', preferences);
  },
};

// Notifications APIs
export const notifications = {
  getAll: async () => {
    return await api.get('/api/notifications');
  },

  markAsRead: async (notificationId) => {
    return await api.put(`/api/notifications/${notificationId}/read`);
  },
};

// Search APIs
export const search = {
  query: async (queryText) => {
    return await api.get('/api/search', { params: { query: queryText } });
  },
};

export default {
  auth,
  surveys,
  recommendations,
  users,
  notifications,
  search,
};

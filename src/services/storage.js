import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
  async saveData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  },

  async getData(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  },

  async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  },

  async saveSurveyDraft(userId, surveyData) {
    try {
      const key = `surveyDraft-${userId}`;
      await this.saveData(key, surveyData);
    } catch (error) {
      console.error('Error saving survey draft:', error);
    }
  },

  async getSurveyDraft(userId) {
    try {
      const key = `surveyDraft-${userId}`;
      return await this.getData(key);
    } catch (error) {
      console.error('Error retrieving survey draft:', error);
    }
  },

  async clearSurveyDraft(userId) {
    try {
      const key = `surveyDraft-${userId}`;
      await this.removeData(key);
    } catch (error) {
      console.error('Error clearing survey draft:', error);
    }
  },
};

// constants/propTypes.js
import PropTypes from 'prop-types';

export const QuestionOptionPropTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string
};

export const BaseQuestionPropTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  dependsOn: PropTypes.shape({
    questionId: PropTypes.string,
    value: PropTypes.any
  })
};

export const ScaleQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['scale']).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(QuestionOptionPropTypes)).isRequired,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string
};

export const MultiSelectQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['multiSelect']).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(QuestionOptionPropTypes)).isRequired,
  maxSelections: PropTypes.number,
  minSelections: PropTypes.number
};

export const SingleSelectQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['singleSelect']).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(QuestionOptionPropTypes)).isRequired
};

export const OpenEndedQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['openEnded']).isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number
};

// constants/surveyConfig.js
export const PURCHASE_FREQUENCIES = {
  NEVER: 'never',
  RARELY: 'rarely',
  SOMETIMES: 'sometimes',
  OFTEN: 'often',
  ALWAYS: 'always'
};

export const VALUE_PRIORITIES = {
  MUST_HAVE: 'must_have',
  NICE_TO_HAVE: 'nice_to_have',
  NEUTRAL: 'neutral'
};

export const CONFIDENCE_LEVELS = {
  VERY_LOW: 1,
  LOW: 2,
  MEDIUM: 3,
  HIGH: 4,
  VERY_HIGH: 5
};

export const PRICE_RANGES = {
  BUDGET: 'budget',
  MID_RANGE: 'mid_range',
  PREMIUM: 'premium',
  LUXURY: 'luxury'
};

// config/theme.js
export const Theme = {
  colors: {
    primary: '#2C8EB5',
    primaryLight: '#4AA7CD',
    secondary: '#6C757D',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#212529',
    border: '#DEE2E6',
    error: '#DC3545',
    success: '#28A745',
    white: '#FFFFFF',
  },
  fonts: {
    regular: 'Raleway-Regular',
    medium: 'Raleway-Medium',
    bold: 'Raleway-Bold',
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

// config/environment.js
export const ENV = {
  API: {
    BASE_URL: process.env.API_BASE_URL || 'https://api.yourdomain.com',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
  },
  ANALYTICS: {
    ENABLED: true,
    TRACKING_ID: process.env.ANALYTICS_TRACKING_ID,
  },
  STORAGE: {
    ENCRYPTION_KEY: process.env.STORAGE_ENCRYPTION_KEY,
  },
};

// data/surveyQuestions.js
export const VALUES_SECTION = {
  id: 'core_values',
  title: 'Your Core Values',
  description: 'Help us understand what matters most to you.',
  progressWeight: 0.25,
  questions: [
    {
      id: 'important_values',
      category: 'Values',
      type: 'multiSelect',
      question: 'What values are most important to you when choosing a company or product?',
      description: 'Select all that apply',
      required: true,
      options: [
        { value: 'environmental', label: 'Environmental Protection/Sustainability' },
        { value: 'social_justice', label: 'Social justice' },
        { value: 'human_rights', label: 'Human rights' },
        { value: 'labor', label: 'Fair labor practices' },
        { value: 'supply_chain', label: 'Supply chain ethics' },
        { value: 'community', label: 'Community involvement' },
        { value: 'diversity', label: 'Diversity and inclusion' },
        { value: 'innovation', label: 'Innovation and technology' },
        { value: 'animal_welfare', label: 'Animal welfare' },
        { value: 'political', label: 'Political affiliations' }
      ]
    }
  ]
};

export const VALUES_RATING_SECTION = {
  id: 'value_importance',
  title: 'Value Importance',
  description: 'How important is each value to you?',
  progressWeight: 0.2,
  questions: [
    {
      id: 'rate_environmental',
      category: 'Value Importance',
      type: 'scale',
      question: 'Rate the importance of environmental protection/sustainability',
      required: true,
      options: [
        { value: 1, label: 'Not Important' },
        { value: 2, label: 'Slightly Important' },
        { value: 3, label: 'Moderately Important' },
        { value: 4, label: 'Very Important' },
        { value: 5, label: 'Critical' }
      ]
    },
    // Add similar questions for other values
  ]
};

export const PURCHASE_BEHAVIOR_SECTION = {
  id: 'purchase_behavior',
  title: 'Purchase Behavior',
  description: 'Tell us about your shopping habits',
  progressWeight: 0.15,
  questions: [
    {
      id: 'purchase_frequency',
      category: 'Purchase Frequency',
      type: 'singleSelect',
      question: 'How often do you purchase from these categories?',
      required: true,
      options: [
        { value: 'clothing', label: 'Clothing' },
        { value: 'food', label: 'Food and Beverage' },
        { value: 'household', label: 'Household goods' },
        { value: 'personal_care', label: 'Personal care products' },
        { value: 'electronics', label: 'Electronics' }
      ]
    }
  ]
};

export const KNOWLEDGE_SECTION = {
  id: 'knowledge_assessment',
  title: 'Knowledge Assessment',
  description: 'Rate your familiarity with these topics',
  progressWeight: 0.15,
  questions: [
    {
      id: 'knowledge_csr',
      category: 'Knowledge',
      type: 'scale',
      question: 'How knowledgeable are you about corporate social responsibility?',
      required: true,
      options: [
        { value: 1, label: 'Not at all' },
        { value: 2, label: 'Slightly' },
        { value: 3, label: 'Moderately' },
        { value: 4, label: 'Very' },
        { value: 5, label: 'Expert' }
      ]
    }
  ]
};

export const DEALBREAKERS_SECTION = {
  id: 'dealbreakers',
  title: 'Deal Breakers',
  description: 'What would make you stop supporting a company?',
  progressWeight: 0.15,
  questions: [
    {
      id: 'company_dealbreakers',
      category: 'Dealbreakers',
      type: 'multiSelect',
      question: 'Select all issues that would make you stop supporting a company:',
      required: true,
      options: [
        { value: 'environmental_violations', label: 'Environmental violations' },
        { value: 'poor_labor', label: 'Poor treatment of employees' },
        { value: 'human_rights', label: 'Human rights violations' },
        { value: 'unsustainable', label: 'Unsustainable practices' },
        { value: 'inequality', label: 'Employee income inequality' },
        { value: 'transparency', label: 'Lack of transparency' },
        { value: 'media', label: 'Negative media coverage' },
        { value: 'political', label: 'Political affiliations' },
        { value: 'quality', label: 'Poor product quality' }
      ]
    }
  ]
};

export const FINAL_SECTION = {
  id: 'final_questions',
  title: 'Final Questions',
  description: 'Almost done! Just a few more questions.',
  progressWeight: 0.1,
  questions: [
    {
      id: 'ethical_shopping_frequency',
      type: 'singleSelect',
      category: 'Behavior',
      question: 'How often do you make purchasing decisions based on ethical practices?',
      required: true,
      options: [
        { value: 'always', label: 'Always' },
        { value: 'often', label: 'Often' },
        { value: 'sometimes', label: 'Sometimes' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'never', label: 'Never' }
      ]
    },
    {
      id: 'preferred_companies',
      type: 'openEnded',
      category: 'Preferences',
      question: 'Do you have any specific companies in mind that you would like to support?',
      required: false,
      placeholder: 'Enter company names separated by commas'
    }
  ]
};

export const SURVEY_SECTIONS = [
  VALUES_SECTION,
  VALUES_RATING_SECTION,
  PURCHASE_BEHAVIOR_SECTION,
  KNOWLEDGE_SECTION,
  DEALBREAKERS_SECTION,
  FINAL_SECTION
];

export const getSectionProgress = (sectionId) => {
  const section = SURVEY_SECTIONS.find(s => s.id === sectionId);
  return section ? section.progressWeight : 0;
};

export const isSectionValid = (section, responses) => {
  return section.questions.every(question => {
    if (!question.required) return true;
    const response = responses[question.id];
    if (Array.isArray(response)) return response.length > 0;
    return response !== undefined && response !== '';
  });
};

// components/Survey/QuestionTypes/BaseQuestion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from '../../../config/theme';
import { BaseQuestionPropTypes } from '../../../constants/propTypes';

const BaseQuestion = ({ question, error, isRequired, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{question.category}</Text>
      <Text style={styles.question}>
        {question.question}
        {isRequired && <Text style={styles.required}> *</Text>}
      </Text>
      {question.description && (
        <Text style={styles.description}>{question.description}</Text>
      )}
      {children}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

BaseQuestion.propTypes = {
  question: PropTypes.shape(BaseQuestionPropTypes).isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.md,
    backgroundColor: Theme.colors.background,
    borderRadius: Theme.borderRadius.medium,
    marginBottom: Theme.spacing.md,
  },
  category: {
    fontSize: 14,
    color: Theme.colors.primary,
    marginBottom: Theme.spacing.sm,
    fontFamily: Theme.fonts.medium,
  },
  question: {
    fontSize: 18,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.sm,
    fontFamily: Theme.fonts.bold,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.secondary,
    marginBottom: Theme.spacing.md,
    fontFamily: Theme.fonts.regular,
  },
  required: {
    color: Theme.colors.error,
  },
  error: {
    color: Theme.colors.error,
    fontSize: 14,
    marginTop: Theme.spacing.sm,
    fontFamily: Theme.fonts.regular,
  },
});

export default BaseQuestion;

// components/Survey/QuestionTypes/ScaleQuestion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { ScaleQuestionPropTypes } from '../../../constants/propTypes';

const ScaleQuestion = ({ question, value, onChange }) => {
  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={value}
          onValueChange={onChange}
          minimumTrackTintColor={Theme.colors.primary}
          maximumTrackTintColor={Theme.colors.border}
        />
        <View style={styles.labels}>
          {question.options.map((option) => (
            <Text
              key={option.value}
              style={[
                styles.label,
                value === option.value && styles.selectedLabel,
              ]}
            >
              {option.label}
            </Text>
          ))}
        </View>
      </View>
    </BaseQuestion>
  );
};

ScaleQuestion.propTypes = {
  question: PropTypes.shape(ScaleQuestionPropTypes).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: Theme.spacing.md,
  },
  slider: {
    height: 40,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.spacing.sm,
  },
  label: {
    fontSize: 12,
    color: Theme.colors.secondary,
    textAlign: 'center',
    flex: 1,
  },
  selectedLabel: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.medium,
  },
});

export default ScaleQuestion;

// components/Survey/QuestionTypes/MultiSelectQuestion.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { MultiSelectQuestionPropTypes } from '../../../constants/propTypes';

const MultiSelectQuestion = ({ question, value = [], onChange }) => {
  const handleSelect = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    
    if (question.maxSelections && newValue.length > question.maxSelections) {
      return;
    }
    
    onChange(newValue);
  };

  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              value.includes(option.value) && styles.selectedOption,
            ]}
            onPress={() => handleSelect(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                value.includes(option.value) && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
            {option.description && (
              <Text style={styles.optionDescription}>{option.description}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </BaseQuestion>
  );
};

MultiSelectQuestion.propTypes = {
  question: PropTypes.shape(MultiSelectQuestionPropTypes).isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'column',
    gap: Theme.spacing.sm,
  },
  option: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.small,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  selectedOption: {
    backgroundColor: Theme.colors.primaryLight,
    borderColor: Theme.colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: Theme.colors.text,
    fontFamily: Theme.fonts.medium,
  },
  selectedOptionText: {
    color: Theme.colors.primary,
  },
  optionDescription: {
    fontSize: 14,
    color: Theme.colors.secondary,
    marginTop: Theme.spacing.xs,
    fontFamily: Theme.fonts.regular,
  },
});

export default MultiSelectQuestion;

// components/Survey/QuestionTypes/SingleSelectQuestion.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { SingleSelectQuestionPropTypes } from '../../../constants/propTypes';

const SingleSelectQuestion = ({ question, value, onChange }) => {
  const scaleAnimation = React.useRef(new Animated.Value(1)).current;

  const handlePress = (optionValue) => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onChange(optionValue);
  };

  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <Animated.View
            key={option.value}
            style={[
              styles.optionWrapper,
              { transform: [{ scale: scaleAnimation }] },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.option,
                value === option.value && styles.selectedOption,
              ]}
              onPress={() => handlePress(option.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  value === option.value && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </BaseQuestion>
  );
};

SingleSelectQuestion.propTypes = {
  question: PropTypes.shape(SingleSelectQuestionPropTypes).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'column',
    gap: Theme.spacing.sm,
  },
  optionWrapper: {
    width: '100%',
  },
  option: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.small,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.surface,
  },
  selectedOption: {
    backgroundColor: Theme.colors.primaryLight,
    borderColor: Theme.colors.primary,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
    color: Theme.colors.text,
    fontFamily: Theme.fonts.medium,
  },
  selectedOptionText: {
    color: Theme.colors.primary,
  },
});

export default SingleSelectQuestion;

// components/Survey/Navigation/ProgressBar.js
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from '../../../config/theme';

const ProgressBar = ({ progress, totalSections, currentSection }) => {
  const progressAnimation = React.useRef(new Animated.Value(progress)).current;

  React.useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <View style={styles.sectionIndicators}>
        {Array(totalSections)
          .fill(0)
          .map((_, index) => (
            <View
              key={index}
              style={[
                styles.sectionDot,
                index === currentSection && styles.activeDot,
                index < currentSection && styles.completedDot,
              ]}
            />
          ))}
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  totalSections: PropTypes.number.isRequired,
  currentSection: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.md,
  },
  progressBackground: {
    height: 4,
    backgroundColor: Theme.colors.border,
    borderRadius: Theme.borderRadius.small,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Theme.colors.primary,
  },
  sectionIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.spacing.sm,
  },
  sectionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Theme.colors.border,
  },
  activeDot: {
    backgroundColor: Theme.colors.primary,
    transform: [{ scale: 1.2 }],
  },
  completedDot: {
    backgroundColor: Theme.colors.primary,
  },
});

export default ProgressBar;

// context/SurveyContext.js
import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { SURVEY_SECTIONS } from '../data/surveyQuestions';

const initialState = {
  currentSection: 0,
  completedSections: [],
  responses: {},
  valueProfile: {
    primary: [],
    secondary: [],
    flexible: [],
  },
  confidence: {},
  isValid: false,
  progress: 0,
};

const SurveyContext = createContext(null);

function surveyReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_RESPONSE':
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.questionId]: action.value,
        },
      };
    
    case 'NEXT_SECTION':
      return {
        ...state,
        currentSection: state.currentSection + 1,
        completedSections: [...state.completedSections, SURVEY_SECTIONS[state.currentSection].id],
      };
    
    case 'PREVIOUS_SECTION':
      return {
        ...state,
        currentSection: Math.max(0, state.currentSection - 1),
      };
    
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: action.progress,
      };
    
    case 'SET_VALIDITY':
      return {
        ...state,
        isValid: action.isValid,
      };
    
    case 'UPDATE_VALUE_PROFILE':
      return {
        ...state,
        valueProfile: action.profile,
      };
    
    default:
      return state;
  }
}

export function SurveyProvider({ children }) {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  const validateCurrentSection = () => {
    const currentSectionQuestions = SURVEY_SECTIONS[state.currentSection].questions;
    const isValid = currentSectionQuestions.every(question => {
      if (!question.required) return true;
      const response = state.responses[question.id];
      if (Array.isArray(response)) return response.length > 0;
      return response !== undefined && response !== '';
    });
    
    dispatch({ type: 'SET_VALIDITY', isValid });
    return isValid;
  };

  const updateResponse = (questionId, value) => {
    dispatch({ type: 'UPDATE_RESPONSE', questionId, value });
  };

  const nextSection = () => {
    if (validateCurrentSection() && state.currentSection < SURVEY_SECTIONS.length - 1) {
      dispatch({ type: 'NEXT_SECTION' });
      const newProgress = (state.currentSection + 1) / SURVEY_SECTIONS.length;
      dispatch({ type: 'UPDATE_PROGRESS', progress: newProgress });
    }
  };

  const previousSection = () => {
    if (state.currentSection > 0) {
      dispatch({ type: 'PREVIOUS_SECTION' });
      const newProgress = (state.currentSection - 1) / SURVEY_SECTIONS.length;
      dispatch({ type: 'UPDATE_PROGRESS', progress: newProgress });
    }
  };

  const value = {
    state,
    updateResponse,
    nextSection,
    previousSection,
    validateCurrentSection,
  };

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  );
}

SurveyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSurvey() {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
}

// components/Survey/SurveyContainer.js
import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useSurvey } from '../../context/SurveyContext';
import ProgressBar from './Navigation/ProgressBar';
import NavigationButtons from './Navigation/NavigationButtons';
import QuestionRenderer from './QuestionRenderer';
import { SURVEY_SECTIONS } from '../../data/surveyQuestions';
import { Theme } from '../../config/theme';

function SurveyContainer() {
  const {
    state,
    updateResponse,
    nextSection,
    previousSection,
    validateCurrentSection,
  } = useSurvey();

  const currentSection = SURVEY_SECTIONS[state.currentSection];

  const handleResponse = (questionId, value) => {
    updateResponse(questionId, value);
    validateCurrentSection();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar
        progress={state.progress}
        totalSections={SURVEY_SECTIONS.length}
        currentSection={state.currentSection}
      />
      
      <ScrollView style={styles.contentContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{currentSection.title}</Text>
          <Text style={styles.sectionDescription}>
            {currentSection.description}
          </Text>
        </View>

        {currentSection.questions.map((question) => (
          <QuestionRenderer
            key={question.id}
            question={question}
            value={state.responses[question.id]}
            onChange={(value) => handleResponse(question.id, value)}
          />
        ))}
      </ScrollView>

      <NavigationButtons
        onNext={nextSection}
        onPrevious={previousSection}
        canGoNext={state.isValid}
        canGoPrevious={state.currentSection > 0}
        isLastSection={state.currentSection === SURVEY_SECTIONS.length - 1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  contentContainer: {
    flex: 1,
    padding: Theme.spacing.md,
  },
  sectionHeader: {
    marginBottom: Theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.sm,
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.secondary,
  },
});

export default SurveyContainer;

// components/Survey/QuestionRenderer.js
import React from 'react';
import PropTypes from 'prop-types';
import ScaleQuestion from './QuestionTypes/ScaleQuestion';
import MultiSelectQuestion from './QuestionTypes/MultiSelectQuestion';
import SingleSelectQuestion from './QuestionTypes/SingleSelectQuestion';
import OpenEndedQuestion from './QuestionTypes/OpenEndedQuestion';

function QuestionRenderer({ question, value, onChange }) {
  const renderQuestion = () => {
    switch (question.type) {
      case 'scale':
        return (
          <ScaleQuestion
            question={question}
            value={value || 1}
            onChange={onChange}
          />
        );
      case 'multiSelect':
        return (
          <MultiSelectQuestion
            question={question}
            value={value || []}
            onChange={onChange}
          />
        );
      case 'singleSelect':
        return (
          <SingleSelectQuestion
            question={question}
            value={value || ''}
            onChange={onChange}
          />
        );
      case 'openEnded':
        return (
          <OpenEndedQuestion
            question={question}
            value={value || ''}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return renderQuestion();
}

QuestionRenderer.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf(['scale', 'multiSelect', 'singleSelect', 'openEnded']).isRequired,
    // ... other question props
  }).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default QuestionRenderer;

// utils/validation.js
export const validateQuestion = (question, value) => {
  if (question.required) {
    if (value === undefined || value === null || value === '') {
      return 'This question is required';
    }

    if (Array.isArray(value) && value.length === 0) {
      return 'Please select at least one option';
    }
  }

  if (question.type === 'multiSelect') {
    if (question.minSelections && value.length < question.minSelections) {
      return `Please select at least ${question.minSelections} options`;
    }
    if (question.maxSelections && value.length > question.maxSelections) {
      return `Please select no more than ${question.maxSelections} options`;
    }
  }

  return null;
};

// services/api.js
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

// components/Survey/LoadingState.js
import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Theme } from '../../config/theme';

function LoadingState({ message = 'Loading...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Theme.colors.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

LoadingState.propTypes = {
  message: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.lg,
  },
  message: {
    marginTop: Theme.spacing.md,
    color: Theme.colors.text,
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
  },
});

export default LoadingState;

// components/Survey/ErrorState.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../../config/theme';

function ErrorState({ message = 'Something went wrong', onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

ErrorState.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.lg,
  },
  message: {
    color: Theme.colors.error,
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
  },
  retryButton: {
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,
    borderRadius: Theme.borderRadius.medium,
  },
  retryText: {
    color: Theme.colors.white,
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
  },
});

export default ErrorState;

// utils/animations.js
import { Animated, Easing } from 'react-native';

export const Animations = {
  fadeIn: (value, duration = 300) => {
    return Animated.timing(value, {
      toValue: 1,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    });
  },

  fadeOut: (value, duration = 300) => {
    return Animated.timing(value, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    });
  },

  slideIn: (value, duration = 300) => {
    return Animated.spring(value, {
      toValue: 0,
      useNativeDriver: true,
      damping: 20,
      mass: 1,
      stiffness: 100,
    });
  },

  scaleButton: (value) => {
    return Animated.sequence([
      Animated.timing(value, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]);
  },
};

// components/Survey/AnimatedSection.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { Animations } from '../../utils/animations';

function AnimatedSection({ children, index, currentIndex }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (index === currentIndex) {
      Animated.parallel([
        Animations.fadeIn(opacity),
        Animations.slideIn(translateX),
      ]).start();
    }
  }, [currentIndex]);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ translateX }],
      }}
    >
      {children}
    </Animated.View>
  );
}

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default AnimatedSection;

// components/Survey/AccessibilityWrapper.js
import React from 'react';
import { View, AccessibilityInfo } from 'react-native';
import PropTypes from 'prop-types';

function AccessibilityWrapper({ 
  children, 
  label, 
  hint, 
  role = 'none',
  onAccessibilityTap,
  importantForAccessibility = 'yes',
}) {
  const announceAccessibility = () => {
    if (hint) {
      AccessibilityInfo.announceForAccessibility(hint);
    }
    if (onAccessibilityTap) {
      onAccessibilityTap();
    }
  };

  return (
    <View
      accessible
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole={role}
      importantForAccessibility={importantForAccessibility}
      onAccessibilityTap={announceAccessibility}
    >
      {children}
    </View>
  );
}

AccessibilityWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  role: PropTypes.string,
  onAccessibilityTap: PropTypes.func,
  importantForAccessibility: PropTypes.oneOf(['yes', 'no', 'no-hide-descendants']),
};

export default AccessibilityWrapper;

// components/Survey/TransitionView.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

function TransitionView({ children, isVisible, style }) {
  const opacity = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const translateY = useRef(new Animated.Value(isVisible ? 0 : 50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: isVisible ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: isVisible ? 0 : 50,
        damping: 20,
        mass: 1,
        stiffness: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

TransitionView.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default TransitionView;

// utils/accessibility.js
export const AccessibilityUtils = {
  announce: (message) => {
    AccessibilityInfo.announceForAccessibility(message);
  },

  updateScreenReader: async () => {
    try {
      const isEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      return isEnabled;
    } catch (error) {
      console.error('Error checking screen reader:', error);
      return false;
    }
  },

  getAccessibilityLabel: (question) => {
    const required = question.required ? 'Required. ' : '';
    return `${required}${question.category}. ${question.question}`;
  },

  getAccessibilityHint: (question) => {
    switch (question.type) {
      case 'scale':
        return 'Slide to select a value between 1 and 5';
      case 'multiSelect':
        return 'Double tap to select multiple options';
      case 'singleSelect':
        return 'Double tap to select one option';
      case 'openEnded':
        return 'Double tap to enter text';
      default:
        return '';
    }
  },
};

// services/analytics.js
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

// services/errorTracking.js
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

// hooks/useAnalytics.js
import { useEffect, useRef } from 'react';
import { AnalyticsService } from '../services/analytics';

export const useAnalytics = (sectionId, sectionIndex) => {
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
  }, [sectionId, sectionIndex]);

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

// components/Survey/AnalyticsWrapper.js
import React, { useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

function AnalyticsWrapper({ children, sectionId, sectionIndex }) {
  const { trackResponse } = useAnalytics(sectionId, sectionIndex);

  return React.Children.map(children, child =>
    React.cloneElement(child, { onResponse: trackResponse })
  );
}

// components/Survey/ErrorBoundary.js
import React from 'react';
import { ErrorTracking } from '../../services/errorTracking';
import ErrorState from './ErrorState';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    ErrorTracking.logError(error, {
      component: 'Survey',
      errorInfo,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          message="Something went wrong with the survey. Please try again."
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

// services/performance.js
import { PerformanceObserver, performance } from 'perf_hooks';

export const PerformanceTracking = {
  initialize: () => {
    const obs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        AnalyticsService.trackPerformance({
          name: entry.name,
          duration: entry.duration,
          startTime: entry.startTime,
        });
      });
    });
    
    obs.observe({ entryTypes: ['measure'] });
  },

  startMeasurement: (name) => {
    performance.mark(`${name}-start`);
  },

  endMeasurement: (name) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  },
};

// services/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
  // Survey Response Storage
  saveSurveyProgress: async (userId, data) => {
    try {
      const key = `survey_progress_${userId}`;
      await AsyncStorage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now(),
      }));
    } catch (error) {
      console.error('Error saving survey progress:', error);
      throw error;
    }
  },

  getSurveyProgress: async (userId) => {
    try {
      const key = `survey_progress_${userId}`;
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting survey progress:', error);
      return null;
    }
  },

  // Offline Queue Management
  addToOfflineQueue: async (action) => {
    try {
      const queue = await StorageService.getOfflineQueue();
      queue.push({
        ...action,
        timestamp: Date.now(),
        id: Math.random().toString(36).substr(2, 9),
      });
      await AsyncStorage.setItem('offline_queue', JSON.stringify(queue));
    } catch (error) {
      console.error('Error adding to offline queue:', error);
    }
  },

  getOfflineQueue: async () => {
    try {
      const queue = await AsyncStorage.getItem('offline_queue');
      return queue ? JSON.parse(queue) : [];
    } catch (error) {
      console.error('Error getting offline queue:', error);
      return [];
    }
  },

  clearOfflineQueue: async () => {
    try {
      await AsyncStorage.removeItem('offline_queue');
    } catch (error) {
      console.error('Error clearing offline queue:', error);
    }
  },
};

// services/offlineSync.js
import NetInfo from '@react-native-community/netinfo';
import { StorageService } from './storage';
import { SurveyAPI } from './api';

export const OfflineSync = {
  initialize: () => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        OfflineSync.processPendingActions();
      }
    });
  },

  processPendingActions: async () => {
    try {
      const queue = await StorageService.getOfflineQueue();
      
      for (const action of queue) {
        try {
          await OfflineSync.processAction(action);
        } catch (error) {
          console.error('Error processing action:', action, error);
        }
      }

      await StorageService.clearOfflineQueue();
    } catch (error) {
      console.error('Error processing offline queue:', error);
    }
  },

  processAction: async (action) => {
    switch (action.type) {
      case 'SUBMIT_SURVEY':
        await SurveyAPI.submitSurvey(action.data);
        break;
      case 'UPDATE_RESPONSE':
        await SurveyAPI.updateResponse(action.data);
        break;
      // Add other cases as needed
    }
  },
};

// hooks/useOfflineSupport.js
import { useEffect, useCallback } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { StorageService } from '../services/storage';

export const useOfflineSupport = (userId) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const saveProgress = useCallback(async (data) => {
    if (!isOnline) {
      await StorageService.addToOfflineQueue({
        type: 'SAVE_PROGRESS',
        data,
        userId,
      });
    } else {
      await SurveyAPI.saveProgress(userId, data);
    }
  }, [isOnline, userId]);

  const submitSurvey = useCallback(async (data) => {
    if (!isOnline) {
      await StorageService.addToOfflineQueue({
        type: 'SUBMIT_SURVEY',
        data,
        userId,
      });
      return { status: 'queued' };
    }

    return await SurveyAPI.submitSurvey(data);
  }, [isOnline, userId]);

  return {
    isOnline,
    saveProgress,
    submitSurvey,
  };
};

// components/Survey/OfflineIndicator.js
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Theme } from '../../config/theme';

function OfflineIndicator({ isOnline }) {
  const translateY = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: isOnline ? -50 : 0,
      useNativeDriver: true,
      bounciness: 8,
    }).start();
  }, [isOnline]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={styles.text}>
        You're offline. Your responses will be saved and submitted when you're back online.
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Theme.colors.warning,
    padding: Theme.spacing.sm,
    zIndex: 1000,
  },
  text: {
    color: Theme.colors.white,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Theme.fonts.medium,
  },
});

// Updated SurveyContainer with offline support
import { useOfflineSupport } from '../../hooks/useOfflineSupport';

function SurveyContainer({ userId }) {
  const { isOnline, saveProgress, submitSurvey } = useOfflineSupport(userId);
  
  // ... existing code ...

  useEffect(() => {
    const saveInterval = setInterval(() => {
      saveProgress(state.responses);
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(saveInterval);
  }, [state.responses]);

  return (
    <SafeAreaView style={styles.container}>
      <OfflineIndicator isOnline={isOnline} />
      {/* ... rest of the component ... */}
    </SafeAreaView>
  );
}
import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
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

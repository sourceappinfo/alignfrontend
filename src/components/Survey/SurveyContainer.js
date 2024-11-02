import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useSurvey } from 'context/SurveyContext'; // Adjusted for Babel alias
import ProgressBar from './Navigation/ProgressBar';
import NavigationButtons from './Navigation/NavigationButtons';
import QuestionRenderer from './QuestionRenderer';
import { SURVEY_SECTIONS } from 'data/surveyQuestions'; // Adjusted for Babel alias
import { Theme } from 'config/theme'; // Adjusted for Babel alias

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
    backgroundColor: Theme.colors.background,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: Theme.spacing.md,
  },
  sectionDescription: {
    color: Theme.colors.secondary,
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
  },
  sectionHeader: {
    marginBottom: Theme.spacing.lg,
  },
  sectionTitle: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.bold,
    fontSize: 24,
    marginBottom: Theme.spacing.sm,
  },
});

export default SurveyContainer;

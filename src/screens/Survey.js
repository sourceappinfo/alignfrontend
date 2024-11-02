import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, TouchableOpacity, Animated } from 'react-native';
import { SurveyContext } from 'context/SurveyContext';
import useSurveyData from 'hooks/useSurveyData';
import useRecommendations from 'hooks/useRecommendations';
import QuestionRenderer from 'components/Survey/QuestionRenderer';
import GlobalStyles from 'GlobalStyles';
import { ProgressBar } from 'react-native-paper'; // For a progress bar
import { FontFamily, Color } from 'GlobalStyles'; // Assume you have these values in GlobalStyles

const Survey = ({ navigation }) => {
  const { surveyData, submitSurveyData, loading, error } = useSurveyData();
  const { fetchRecommendations } = useRecommendations();
  const { responses, setResponses } = useContext(SurveyContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1)); // For smooth transitions

  useEffect(() => {
    if (error) {
      Alert.alert('Error', 'Failed to load survey data. Please try again later.');
    }
  }, [error]);

  useEffect(() => {
    // Fade animation when moving to the next question
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentQuestionIndex]);

  const handleAnswer = (questionId, answer) => {
    setResponses((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNextQuestion = () => {
    // Trigger fade-out animation before moving to the next question
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentQuestionIndex((index) => index + 1);
    });
  };

  const handleSubmit = async () => {
    try {
      await submitSurveyData(responses);
      await fetchRecommendations(responses);
      navigation.navigate('Recommendations');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit survey. Please try again.');
    }
  };

  if (loading) return <ActivityIndicator size="large" color={GlobalStyles.colors.primary} />;
  if (error) return <Text>Error loading survey.</Text>;

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      {/* Progress bar */}
      <ProgressBar
        progress={(currentQuestionIndex + 1) / surveyData.length}
        color={Color.teal}
        style={styles.progressBar}
      />

      {surveyData.length > 0 ? (
        <View style={styles.questionContainer}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <QuestionRenderer
              question={surveyData[currentQuestionIndex]}
              onAnswer={(answer) => handleAnswer(surveyData[currentQuestionIndex].id, answer)}
            />
          </Animated.View>

          {/* Next/Submit Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              currentQuestionIndex < surveyData.length - 1 ? handleNextQuestion() : handleSubmit()
            }
          >
            <Text style={styles.buttonText}>
              {currentQuestionIndex < surveyData.length - 1 ? 'Next' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.noQuestionsText}>No questions available.</Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: Color.deepOceanBlue, // Adjusted background color
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Color.teal,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.bold,
    fontSize: 16,
    textAlign: 'center',
  },
  noQuestionsText: {
    color: Color.softWhite,
    fontFamily: FontFamily.regular,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
};

export default Survey;

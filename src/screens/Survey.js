import React, { useContext, useEffect, useState } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import { SurveyContext } from '../../context/SurveyContext';
import { useSurveyData } from '../hooks/useSurveyData';
import { useRecommendations } from '../hooks/useRecommendations';
import QuestionRenderer from '../components/Survey/QuestionRenderer';
import GlobalStyles from '../GlobalStyles';

const Survey = ({ navigation }) => {
  const { surveyData, loading, error } = useSurveyData();
  const { fetchRecommendations } = useRecommendations();
  const { responses, setResponses } = useContext(SurveyContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Fetch survey data on mount
  }, []);

  const handleAnswer = (questionId, answer) => {
    setResponses((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    await fetchRecommendations(responses);
    navigation.navigate('Recommendations');
  };

  if (loading) return <ActivityIndicator size="large" color={GlobalStyles.colors.primary} />;
  if (error) return <Text>Error loading survey.</Text>;

  return (
    <View style={GlobalStyles.container}>
      {surveyData.length > 0 ? (
        <View>
          <QuestionRenderer
            question={surveyData[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
          <Button
            title={currentQuestionIndex < surveyData.length - 1 ? "Next" : "Submit"}
            onPress={() =>
              currentQuestionIndex < surveyData.length - 1
                ? setCurrentQuestionIndex((index) => index + 1)
                : handleSubmit()
            }
          />
        </View>
      ) : (
        <Text>No questions available.</Text>
      )}
    </View>
  );
};

export default Survey;

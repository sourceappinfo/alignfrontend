// src/components/Survey/QuestionRenderer.js
import React from 'react';
import PropTypes from 'prop-types';
import ScaleQuestion from 'components/Survey/QuestionTypes/ScaleQuestion'; // Adjusted if components alias is used
import MultiSelectQuestion from 'components/Survey/QuestionTypes/MultiSelectQuestion';
import SingleSelectQuestion from 'components/Survey/QuestionTypes/SingleSelectQuestion';
import OpenEndedQuestion from 'components/Survey/QuestionTypes/OpenEndedQuestion';

const QuestionRenderer = ({ question, value, onChange }) => {
  switch (question.type) {
    case 'scale':
      return <ScaleQuestion question={question} value={value} onChange={onChange} />;
    case 'multiSelect':
      return <MultiSelectQuestion question={question} value={value} onChange={onChange} />;
    case 'singleSelect':
      return <SingleSelectQuestion question={question} value={value} onChange={onChange} />;
    case 'openEnded':
      return <OpenEndedQuestion question={question} value={value} onChange={onChange} />;
    default:
      return null;
  }
};

QuestionRenderer.propTypes = {
  question: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default QuestionRenderer;

// src/components/Survey/QuestionRenderer.js
import React from 'react';
import PropTypes from 'prop-types';
import ScaleQuestion from './QuestionTypes/ScaleQuestion';
import MultiSelectQuestion from './QuestionTypes/MultiSelectQuestion';
import SingleSelectQuestion from './QuestionTypes/SingleSelectQuestion';
import OpenEndedQuestion from './QuestionTypes/OpenEndedQuestion';

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

// src/constants/propTypes.js
import PropTypes from 'prop-types';

export const BaseQuestionPropTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  required: PropTypes.bool,
  description: PropTypes.string,
};

export const ScaleQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['scale']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};

export const MultiSelectQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['multiSelect']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export const SingleSelectQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['singleSelect']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export const OpenEndedQuestionPropTypes = {
  ...BaseQuestionPropTypes,
  type: PropTypes.oneOf(['openEnded']).isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

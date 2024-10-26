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
  
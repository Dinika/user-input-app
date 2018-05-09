import React from 'react';

const validation = (props) => {

  const threshold = 5;

  const validateInputLength = (length) => {
    return length <= threshold ? 'Text too short' : 'Text long enough'
  }

  return <p class="validation-text">{validateInputLength(props.inputTextlength)}</p>
}

export default validation;
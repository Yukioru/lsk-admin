import React from 'react';
import get from 'lodash/get';
import InputArrayBase from '../../../UI/molecules/InputArray';

const InputArray = ({
  field,
  form,
  onError,
  ...props
}) => (
  <InputArrayBase
    {...field}
    {...props}
    validationState={form.errors[field.name] ? 'error' : null}
    onChange={(value) => {
      form.setFieldValue(field.name, value);
    }}
    onError={() => onError && onError(form.errors[field.name])} // this.globalError
    value={field.value}
  />
);

export default InputArray;

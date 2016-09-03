import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function RedisScanForm({ handleSubmit, buttonClass, fieldClass }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="pattern" type="text" component="input" className={fieldClass} placeholder="Key pattern" />
      <input type="submit" value="Save" className={buttonClass} />
    </form>
  );
}

export default reduxForm({
  form: 'redisScan',
})(RedisScanForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function ConnectionForm({ error, handleSubmit, buttonClass, fieldClass }) {
  console.log(error);
  return (
    <form onSubmit={handleSubmit}>
      <Field name="dsn" type="text" component="input" className={fieldClass} placeholder="Data Source (redis://...)" />
      <input type="submit" value="Save" className={buttonClass} />
    </form>
  );
}

export default reduxForm({
  form: 'connection',
})(ConnectionForm);

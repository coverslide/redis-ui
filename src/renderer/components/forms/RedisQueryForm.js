import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function RedisQueryForm({ handleSubmit, buttonClass, fieldClass }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="query" type="text" component="input" className={fieldClass} placeholder="Query" />
      <input type="submit" value="Save" className={buttonClass} />
    </form>
  );
}

export default reduxForm({
  form: 'redisQuery',
})(RedisQueryForm);

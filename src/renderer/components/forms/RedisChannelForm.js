import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function RedisChannelForm({ handleSubmit, buttonClass, fieldClass }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="query" type="text" component="input" className={fieldClass} placeholder="Pubsub Channel" />
      <input type="submit" value="Listen" className={buttonClass} />
    </form>
  );
}

export default reduxForm({
  form: 'redisChannel',
})(RedisChannelForm);

import React from 'react';
import { connect } from 'react-redux';
import { formDispatcher } from 'react-redux-helpers';
import { RedisQueryForm } from 'components/forms';
import { Redis } from 'modules';

export function QueryPanel({ results }) {
  return (
    <div>
      <div>
        <RedisQueryForm onSubmit={formDispatcher(Redis.actions.QUERY)} buttonClass="button primary round" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(results) ? results : [results]).map(result => {
            return (
              <tr>
                <td>{result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(state => ({
  results: state.redis.results,
}))(QueryPanel);

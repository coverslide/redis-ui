import React from 'react';
import { connect } from 'react-redux';
import { formDispatcher } from 'react-redux-helpers';
import { ConnectionForm } from 'components/forms';
import { Connection } from 'modules';

export function ConnectionList({ connections }) {
  return (
    <ul className="connection-list">
      <li key="new" className="connection">
        <ConnectionForm onSubmit={formDispatcher(Connection.actions.CREATE_CONNECTION)} buttonClass="button primary round" />
      </li>
      {
        connections.map(connection => {
          return (
            <li className="connection">
              <span className="connection-dsn">{connection.dsn}</span>
            </li>
          );
        })
      }
    </ul>
  );
}

export default connect()(ConnectionList);

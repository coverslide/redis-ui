import React from 'react';
import { connect } from 'react-redux';
import ConnectionList from './ConnectionList';
import CurrentConnection from './CurrentConnection';

export function Root({ connections, currentConnection, dispatch }) {
  return (
    <div>
      <div className="header row">
        <div className="small-12 columns">
          <h1>Redis UI</h1>
        </div>
      </div>
      <div className="row content">
        <div className="small-4 columns">
          <ConnectionList connections={connections} />
        </div>
        <div className="small-8 columns">
          { currentConnection && <CurrentConnection connection={currentConnection} /> }
        </div>
      </div>
      <div className="footer row" />
    </div>
  );
}

export default connect(state => ({
  connections: state.connection.connections,
  currentConnection: state.connection.currentConnection,
}))(Root);

import React from 'react';
import { connect } from 'react-redux';
import { formDispatcher } from 'react-redux-helpers';
import { RedisScanForm } from 'components/forms';
import { Redis } from 'modules';

export function ScanPanel({ scanResult }) {
  return (
    <div>
      <div>
        <RedisScanForm onSUbmit={formDispatcher(Redis.actions.SCAN)} buttonClass="button primary round" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {scanResult.map(result => {
            return (
              <tr>
                <td>{results.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(state => ({
  scanResult: state.redis.scanResult || [],
}))(ScanPanel);

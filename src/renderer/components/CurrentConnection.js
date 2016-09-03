import React from 'react';
import { connect } from 'react-redux';
import { TabPane, Tab } from 'components/common';
import { QueryPanel, ScanPanel, PubsubPanel } from 'components/redis';

export function CurrentConnection({ connection }) {
  return (
    <div className="current-connection">
      <TabPane>
        <Tab name="query" title="Query">
          {<QueryPanel />}
        </Tab>
        <Tab name="scan" title="Scan">
          <ScanPanel />
        </Tab>
        <Tab name="pubsub" title="Pubsub">
          <PubsubPanel />
        </Tab>
      </TabPane>
    </div>
  );
}

export default connect()(CurrentConnection);

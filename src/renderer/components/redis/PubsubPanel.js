import React from 'react';
import { connect } from 'react-redux';
import { formDispatcher } from 'react-redux-helpers';
import { RedisChannelForm } from 'components/forms';
import { Redis } from 'modules';

export function PubsubPanel({ channels, messages }) {
  return (
    <div>
      <ul className="channel-list">
        <li key="new" className="channel">
          <RedisChannelForm onSubmit={formDispatcher(Redis.actions.CREATE_CHANNEL)} buttonClass="button primary round" />
        </li>
        {
          channels.map(channel => {
            return (
              <li className="channel">
                <span className="channel-name">{channel.name}</span>
              </li>
            );
          })
        }
      </ul>
      <ul className="message-list">
        {
          messages.map(message => {
            return (
              <li className="message">
                {message}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default connect(state => ({
  channels: state.redis.channels || [],
  messages: state.redis.messages || [],
}))(PubsubPanel);

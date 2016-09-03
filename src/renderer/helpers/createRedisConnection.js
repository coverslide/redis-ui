import bluebird from 'bluebird';
import redis from 'redis';

export default function (dsn) {
  const client = redis.createClient(dsn);
  bluebird.promisifyAll(client);
  return client;
};

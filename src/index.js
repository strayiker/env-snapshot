import 'dotenv/config';
import camelCase from 'camelcase';

export function takeEnvSnapshot() {
  return Object.keys(process.env).reduce((env, key) => {
    const prop = {
      value: process.env[key],
      writable: false,
    };

    return Object.defineProperties(env, {
      [camelCase(key)]: prop,
      [key]: prop,
    });
  }, {});
}

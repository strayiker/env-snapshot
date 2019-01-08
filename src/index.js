import 'dotenv/config';
import camelCase from 'camelcase';

export function takeEnvSnapshot() {
  return Object.keys(process.env).reduce((settings, key) => {
    const prop = {
      value: settings[key],
      writable: false,
    };

    return Object.defineProperties(this, {
      [camelCase(key)]: prop,
      [key]: prop,
    });
  }, {});
}

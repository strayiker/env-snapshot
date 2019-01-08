[![Version](https://badgen.net/npm/v/@sadbox/env-snapshot)](https://www.npmjs.com/package/@sadbox/env-snapshot)
[![License](https://badgen.net/npm/license/@sadbox/env-snapshot)](https://www.npmjs.com/package/@sadbox/env-snapshot)
[![Dependencies](https://badgen.net/david/dep/strayiker/env-snapshot)](https://www.npmjs.com/package/@sadbox/env-snapshot)
[![Build Status](https://travis-ci.com/strayiker/env-snapshot.svg?branch=master)](https://travis-ci.com/strayiker/env-snapshot)

# Env Snapshot

A tool for creating a statically accessible copy of `process.env` variables.

## Installation

`npm install @sadbox/env-snapshot`

`yarn add @sadbox/env-snapshot`

## Usage

```javascript
import { takeEnvSnapshot } from '@sadbox/env-snapshot';

const env = takeEnvSnapshot();

env.NODE_ENV; // production
env.nodeEnv; // production
```

It uses `dotenv` lib under the hood, so next is valid.

```yaml
#.env
CUSTOM_OPTION=value
```

```javascript
const env = takeEnvSnapshot();

env.CUSTOM_OPTION; // value
env.customOption; // value
```

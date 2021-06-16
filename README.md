# Devercode-logger (Typescript)

A simple pretty logger

## Authors

- [@devercode](https://github.com/devercode)

## Installation

```bash
  npm install devercode-logger
  yarn add devercode-logger
```

## Demo

![alt demo](https://user-images.githubusercontent.com/85423098/122147465-27480100-ce83-11eb-8383-19efeda5e5f4.png)

## Features

- Colorize support
- Label Support
- Sentry Integration Support

## Usage

- Simple log

```javascript
import { createLogger, TransportType } from "../index";

const logger = createLogger({
  transports: [TransportType.CONSOLE],
});
logger.info("LABEL::Helloworld");
logger.warn("Warning!!!");
logger.error("throw an error");
logger.silly("Silly log");
```

- Catch Error with sentry

```javascript
const logger = createLogger({
  transports: [TransportType.CONSOLE, TransportType.SENTRY],
  context: {
    sentryOpts: {
      level: "error",
      sentry: {
        dsn: "https://27a93ba8adce472db368f5ad8c7789f1@o850084.ingest.sentry.io/5816836",
      },
    },
  },
});
logger.error("Throw an error", {
  foo: "foo",
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Support

For support, email devercode@gmail.com

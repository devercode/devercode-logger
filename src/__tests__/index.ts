import { createLogger, TransportType } from "../index";
describe("features", () => {
  it("Should throw simple log", () => {
    const logger = createLogger({
      transports: [TransportType.CONSOLE],
    });
    logger.info("LABEL::Helloworld");
    logger.warn("Warning!!!");
    logger.error("throw an error");
    logger.silly("Silly log");
  });

  it.only("should catch error with sentry", () => {
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
  });
});

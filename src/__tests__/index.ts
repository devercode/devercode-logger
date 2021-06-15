import { createLogger, TransportType } from "../index";
describe("it should ok", () => {
  it("should working well", () => {
    const logger = createLogger({
      transports: [TransportType.CONSOLE],
    });
    logger.error("Test::hello how are you");
    logger.debug("hello how are you");
    logger.info("hello how are you");
    logger.warn("hello how are you");
    logger.silly("hello how are you");
  });
});

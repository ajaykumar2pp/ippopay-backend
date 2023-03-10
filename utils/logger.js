const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}, ${level.toUpperCase()} [${label}] => ${message}`;
});
const httpFormat = printf(({ level, message, label }) => {
  return `${level.toUpperCase()} [${label}] => ${message}`;
});

const logger = winston.createLogger({
  level: "info",


  transports: [
    new winston.transports.Console({
      level: "info",
      format: combine(
        // winston.format.colorize({ colors }),
        label({ label: "IPPOPAY.SERVER" }),
        timestamp({ format: "YYYY-MM-DDTHH:mm:ss:ms" }),
        customFormat
      ),
    }),
  ],

  exitOnError: false,
});

const httpLogger = winston.createLogger({
  level: "http",
 
  transports: [
    new winston.transports.Console({
      level: "http",

      format: combine(label({ label: "IPPOPAY.SERVER" }), httpFormat),
    }),
  ],
});
module.exports =httpLogger;
module.exports = logger;
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, splat } = format;
require('winston-loggly-bulk');

const logger = createLogger({
    format: combine(
        timestamp(),
        splat(),
        printf(({ level, message, timestamp }) => String().concat(`[${level}][${timestamp}]`, message))
    ),
    transports: [
        new transports.Console(),
        new transports.Loggly({
            token: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            subdomain: "your-subdomain",
            tags: ["xxxx"],
            json: true,
            timestamp: true,
            networkErrorsOnConsole: true,
            bufferOptions: { size: 1000, retriesInMilliSeconds: 60 * 1000 }
        })
    ]
});

module.exports = logger;

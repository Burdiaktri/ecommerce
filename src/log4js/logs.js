const log4js = require("log4js")

log4js.configure({
    appenders: {
      fileAppender: { type: "file", filename: 'warn.log' },
      fileAppenderError: { type: "file", filename: 'error.log' },
      consoleAppender: { type: "console" }
    },
    categories: {
      default: { appenders: ["consoleAppender"], level: "info" },
      console: { appenders: ["consoleAppender"], level: "info" },
      file: { appenders: ["fileAppender"], level: "warn" },
      file: { appenders: ["fileAppenderError"], level: "error" }
    }
  })
  const logger = log4js.getLogger()

  module.exports = logger
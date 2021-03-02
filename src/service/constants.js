'use strict';

const path = require(`path`);

const DEFAULT_SERVER_PORT = 3000;

const MOCK_FILE_PATH = path.join(__dirname, `../../`, `mocks.json`);

const DEFAULT_COMMAND = `--help`;

const USER_ARGV_INDEX = 2;

const ExitCode = {
  success: 0,
  uncaughtFatalException: 1,
  invalidArgument: 9,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  DEFAULT_SERVER_PORT,
  MOCK_FILE_PATH,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  HttpCode,
  ExitCode
};

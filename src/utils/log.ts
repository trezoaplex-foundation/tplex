import debug from 'debug'

const logErrorDebug = debug('tplex:error')
const logInfoDebug = debug('tplex:info')

export const logDebug = debug('tplex:debug')
export const logTrace = debug('tplex:trace')

export const logError = logErrorDebug.enabled
  ? logErrorDebug
  : console.error.bind(console)

export const logInfo = logInfoDebug.enabled
  ? logInfoDebug
  : console.log.bind(console)

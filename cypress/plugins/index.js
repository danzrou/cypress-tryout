const cypressTypeScriptPreprocessor = require('./cp-ts')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}

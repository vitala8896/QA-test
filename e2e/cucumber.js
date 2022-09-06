const common = `
  --require support/hooks.js 
  --require step-definitions/code.js
  `;

module.exports = {
  default: `${common} features/**/*.feature --publish-quiet`
};
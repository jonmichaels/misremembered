const markdownLib = require('../../plugins/markdown');
const outdent = require('outdent');

const halfWidth = children => {
  if (!children) {
    throw new Error('You must provide a non-empty string for an aside.');
  }
  const content = markdownLib.renderInline(children);
  return `<div class="switcher"><div>${outdent`${content}`}</div><div></div></div>`;
};

module.exports = halfWidth;

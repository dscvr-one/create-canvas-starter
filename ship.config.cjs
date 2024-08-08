module.exports = {
  installCommand: () => 'npm ci --prefer-offline --no-audit',
  buildCommand: () => 'echo "no build step"',
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public`,
};

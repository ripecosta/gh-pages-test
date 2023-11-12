module.exports = {
  '!*.{js,jsx,ts,tsx}': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx}': ['prettier --write --ignore-unknown', 'eslint --cache --fix'],
};

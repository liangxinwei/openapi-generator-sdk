module.exports = {
  '**/*.{json,css,scss,md,mdx}': ['prettier --write'],
  '**/*.{js,jsx}': ['eslint --quiet --fix', 'prettier --write'],
};

const repoNameURIPrefix = process.env.NODE_ENV === 'production' ? '/icons' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix
  }
};

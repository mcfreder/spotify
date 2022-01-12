module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.forEach(({ oneOf }) => oneOf?.forEach(({ use }) => {
      use?.forEach?.(({ options: { modules } }) => {
        if (modules?.getLocalIdent) {
          delete modules.getLocalIdent
          modules.localIdentName = '[hash:base64:8]'
        }
      })
    }))
    return config
  }
};
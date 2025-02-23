module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                // modify the options...
                return options
            })
    },
    configureWebpack: {
       devtools: 'source-map' // nebo jiný typ devtools (např. 'cheap-module-source-map' pro produkci)
    },
  // Tohle je důležité pro povolení Vue devtools v produkci
    pluginOptions: {
       vue: {
         devtools: true  // Povolit devtools pro produkční prostředí
       }
    }
}

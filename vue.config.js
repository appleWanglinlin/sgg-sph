module.exports = {
  // 关闭eslint
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
      }
    }
  },
  chainWebpack: config => {
    config.module
          .rule("vue")
          .use("vue-loader")
          .loader("vue-loader")
          .tap(options => {
              options.compilerOptions.directives = {
                  html(node, directiveMeta) {
                    (node.props || (node.props = [])).push({
                        name: "innerHTML",
                        value: `xss(_s(${directiveMeta.value}))`
                    })
                  }
              };
              return options
          })
  }
}
module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "artactree",
        appId: "eniel.artactree",
        win: {
          icon: 'src/assets/icon.ico',
          target: [
            {
              target: 'portable', // 'zip', 'nsis', 'portable'
              arch: ['x64'] // 'x64', 'ia32'
            }
          ]
        }
      }
    }
  },
  publicPath: './'
}

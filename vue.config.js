module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import '@/scss/_variables.scss';
        @import '@/scss/_mixins.scss';   
        `,
      },
    },
  },
};

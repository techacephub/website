// https://v3.nuxtjs.org/api/configuration/nuxt.config
module.exports = {
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/main.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/teamStyling.css",
  ],
  plugins: ["~/plugins/vue-lazysizes.client.js"],
  build: {
    extend(_config: any, { isDev, isClient, loaders: { vue } }: any) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    },
  },
};

require('dotenv').config();

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
    },
    titleTemplate: '%s｜' + process.env.SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: process.env.VIEWPORT },
      { hid: 'description', name: 'description', content: process.env.DEF_DESCRIPTION },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.DEF_URL },
      { hid: 'og:title', content: process.env.SITE_NAME },
      { hid: 'og:description', property: 'og:description', content: process.env.DEF_DESCRIPTION },
      { hid: 'og:image', property: 'og:image', content: process.env.DEF_OGIMAGE },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
    tailwindcss: {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.css',
      purgeCSSInDev: false
    },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/dotenv',
  ],
  optimizedImages: {
    optimizeImages: true,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[folder]/[name].[ext]'
  },

  /*
    ** Source Directory
    */
  srcDir: 'src/',

  /*
  ** Build configuration
  */
  build: {
    fallback: false,
    publicPath: '/assets/',
    devtools: process.env.NODE_ENV === 'production',
    extractCSS:	process.env.NODE_ENV === 'production',
    // subFolders: false,
    filenames: {
      app: () => 'js/[name].js',
      chunk: () => 'js/[name].js',
      css: () => 'css/[name].css',
      img: () => 'img/[folder]/[name].[ext]',
      font: () => 'font/[name].[ext]'
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          stage: 1,
          features: {
            'nesting-rules': false
          },
          // importFrom: {
          //   customMedia: {
          //     '--pc': '(min-width: 768px)',
          //     '--sp': '(max-width: 767px)'
          //   }
          // }
        },
        'postcss-short': {},
        'postcss-calc': {},
        'postcss-nested': {}
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './assets/'
      }
      return config;
    }
  }
}

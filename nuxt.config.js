export default {
    components: true,
    modules: [
        '@nuxtjs/dayjs',
        '@nuxtjs/axios',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        'cookie-universal-nuxt',
        'vue-toastification/nuxt',
    ],
    plugins: ['@/plugins/plugin-icon', { src: '@plugins/plugin-notification', mode: 'client' }],
    buildModules: [
        '@nuxtjs/composition-api/module',
        ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }],
    ],
    css: ['@/assets/css/main.css', '@/assets/fonts/css/nuxt-google-fonts.css'],
    head: {
        htmlAttrs: { lang: 'en' },
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        title: 'Karyashala Workshop',
        meta: [
            { charset: 'utf-8' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    dayjs: { plugins: ['isBetween'] },
    router: { base: '/karyashala' },
    googleFonts: {
        preload: true,
        prefetch: true,
        download: true,
        display: 'swap',
        preconnect: true,
        overwriting: false,
        outputDir: '@/assets/fonts',
        families: {
            'Lexend+Deca': ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        },
    },
    build: {
        postcss: {
            postcssOptions: { plugins: { tailwindcss: {}, autoprefixer: {} } },
        },
    },
}

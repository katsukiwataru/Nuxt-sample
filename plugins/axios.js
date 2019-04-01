export default function ({ $axios }) {
  $axios.onRequest(( config ) => {
    if (process.env.QIITA_TOKEN) {
      config.headers.common['Authentication'] = process.env.QIITA_TOKEN
    }
    return config
  })
}

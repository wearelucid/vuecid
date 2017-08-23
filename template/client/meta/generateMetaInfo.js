import generateMetaTitle from './generateMetaTitle'
import generateMetaDescription from './generateMetaDescription'
import generateMetaImage from './generateMetaImage'

export default function generateMetaInfo (defaultMeta, post, options) {
  const opts = {
    lang: 'de',
    locale: 'de_CH',
    ...options
  }
  const title = generateMetaTitle(defaultMeta, post)
  const ogTitle = post && post.og_title && post.og_enabled ? post.og_title : title
  const description = generateMetaDescription(defaultMeta, post)
  const image = generateMetaImage(defaultMeta, post)
  const metaInfo = {
    title: title,
    htmlAttrs: {
      lang: opts.lang
    },
    meta: [
      { name: 'description', content: description },
      // { name: 'keywords', content: post.keywords },
      // { name: 'author', content: post.author },
      // canonical
      { property: 'og:locale', content: opts.locale },
      { property: 'og:site_name', content: defaultMeta.og_site_name },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: description },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:card', content: 'summary_large_image' }
      // { name: 'twitter:site', content: '@publisher_handle' },
      // { name: 'twitter:creator', content: '@designathon15' },
    ]
  }

  if (image) {
    metaInfo.meta.push(
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image }
    )
  }

  return metaInfo
}

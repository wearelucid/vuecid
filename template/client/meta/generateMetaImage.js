export default function generateMetaImage (defaultMeta, meta) {
  if (defaultMeta.default_og_image) {
    var image = defaultMeta.default_og_image.url
    meta.og_image ? image = meta.og_image.url : null
    return image
  }
}

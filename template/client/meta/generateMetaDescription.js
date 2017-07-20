export default function generateMetaDescription (defaultMeta, meta) {
  if (defaultMeta.default_meta_description) {
    var description = defaultMeta.default_meta_description
    meta.meta_description ? description = meta.meta_description : null
    meta.page_title_override ? description = meta.page_title_override : null
    meta.og_description ? description = meta.og_description : null
    return description
  }
}

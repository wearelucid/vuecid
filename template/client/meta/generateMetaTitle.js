export default function generateMetaTitle (defaultMeta, meta) {
  if (defaultMeta.og_site_name) {
    var title = defaultMeta.og_site_name
    meta.title ? title = (meta.title.rendered || meta.title) : null
    meta.page_title_override ? title = meta.page_title_override : null
    meta.seo_title ? title = meta.seo_title : null
    meta.og_title ? title = meta.og_title : null
    return title
  }
}

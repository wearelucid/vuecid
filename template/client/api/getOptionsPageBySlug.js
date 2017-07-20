import axios from 'axios'
import CONFIG from '../config.js'

import flattenACF from 'api/util/flattenACF'

export default function getOptionsPageBySlug (slug) {
  return axios.get(`${CONFIG.API_URL}/acf/v3/options/${slug}`, {
    transformResponse: [].concat(
      axios.defaults.transformResponse,
      flattenACF
    )
  })
  .then(response => {
    return response.data
  })
}

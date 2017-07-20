import { mapState } from 'vuex'
import { generateMetaInfo } from '../../meta'

import Title from 'components/Title'

export default {
  name: 'HomeView',
  computed: mapState([
    'demo',
    'options'
  ]),
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadDemoData')
      this.$store.dispatch('loadInitialData')
    }
  },
  metaInfo () {
    /* send default options (site-settings) and page SEO options if set */
    const page = this.page /* get the page here */
    const options = this.options && this.options.options ? this.options.options.options : false
    return options ? generateMetaInfo(options, page || options) : {}
  },
  watch: {
    '$route': 'fetchData'
  },
  render (h) {
    const { demodata } = this.demo

    return (
      <div class='page'>
        <Title level={1} id={'Page Title'}>Page Title</Title>
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
        <Title level={2} id={'Modified Subtitle'} modifiers={['highlighted']}>Modified Subtitle</Title>
        {demodata ? demodata.text : 'No text yet'}
      </div>
    )
  }
}

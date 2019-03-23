<template>
  <div>
    <p>/user/index.vue</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async asyncData({store}) {
    if(store.getters['items'].length) {
      return
    }
  await store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['items'])
  },
}
</script>

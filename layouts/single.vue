<template>
  <div>
    <span>single layout</span>
    <appNavigation />
    <hr>
    <nuxt/>
    <nuxt-link to="/"></nuxt-link>
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import appNavigation from '~/components/appNavigation.vue'

export default {
  components: {
    appNavigation
  }
}
</script>

<template>
  <div>
    <span>defalt layout</span>
    <appNavigation />
    <hr>
    <nuxt/>
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import appNavigation from '~/components/appNavigation'

export default {
  components: {
    appNavigation
  }
}
</script>

<style>
</style>

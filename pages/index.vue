<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheTemplate from '~/components/templates/index.vue'

export default defineComponent({
  components: {
    TheTemplate,
  },
  setup() {
    return{}
  }
})
</script>

<template>
  <section>
    <TheTemplate/>
  </section>
</template>

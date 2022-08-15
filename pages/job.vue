<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheTemplate from '~/components/jobs/index.vue'

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

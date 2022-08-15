<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheTemplate from '~/components/career/career.vue'

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

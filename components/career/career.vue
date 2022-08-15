<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
  },
  setup() {

    return {
      items: [
        '/img/5.png',
        '/img/6.png',
        '/img/7.png',
        '/img/8.png',
        '/img/9.png',
        '/img/10.png',
        '/img/7.png',
        '/img/6.png',
        '/img/5.png',
      ]
    }
  },
})
</script>

<template>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      class="d-flex child-flex"
      cols="12"
      xs="12" sm="6" md="4"
    >
      <v-img
        :src="item"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template #placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

</style>
<template>
  <v-app dark>
    <div class="error-page">
      <div v-if="error.statusCode === 404" class="text-xlg">
        {{ pageNotFound }}
      </div>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/" class="text-md"> Back to the Home page </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found, Sorry....',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.error-page {
  text-align: center;
  a {
    color: map-get($accent, main);
  }
}
</style>

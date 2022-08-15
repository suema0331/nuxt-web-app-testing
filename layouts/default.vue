<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

type State = {
  clipped: boolean,
  drawer: boolean,
  fixed: boolean,
}
const initialState = (): State => ({
  clipped: false,
  drawer: false,
  fixed: false,
})

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive<State>(initialState())

    return {
      ...toRefs(state),
      items: [
        {
          icon: 'mdi-cupcake',
          title: 'Top',
          to: '/',
        },
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-account-search',
          title: 'Job',
          to: '/jobs',
        },
        {
          icon: 'mdi-finance',
          title: 'Career',
          to: '/career',
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Fictional Company',
    }
  },
})
</script>

<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <NuxtLink to="/" class="title text-lg font-bold"> {{title}} </NuxtLink>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="font-bold">
      <span class="text-lg">&copy; {{ new Date().getFullYear() }} {{title}}</span>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.title {
  color: map-get($accent, main) !important;
  text-decoration: none;
  padding-left: 20px;
}
.v-list-item__action i {
  color: map-get($accent, main);
}
.v-list-item--active{
  color: map-get($accent,dark);
}
.v-footer {
  color: map-get($accent, main);
}

</style>

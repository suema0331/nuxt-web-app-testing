import {
  mount,
  createLocalVue as baseCreateLocalVue,
  RouterLinkStub,
  VueClass,
  ThisTypedMountOptions,
} from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export function createLocalVue({ useVueRouter } = { useVueRouter: true }) {
  const localVue = baseCreateLocalVue()
  localVue.use(Vuetify)
  if (useVueRouter) localVue.use(VueRouter)
  return localVue
}

type MountOptions = ThisTypedMountOptions<Vue> & {
  router?: typeof VueRouter
  vuetify?: typeof Vuetify
}

export function createWrappedComponent<V extends Vue>(
  TestTargetComponent: VueClass<V>,
  options: MountOptions = {}
) {
  const router = new VueRouter() as any
  const vuetify = new Vuetify() as any

  return mount<V>(TestTargetComponent, {
    router,
    vuetify,
    ...options,
    stubs: {
      NuxtLink: RouterLinkStub,
      RouterLink: RouterLinkStub,
      ...(options.stubs ? options.stubs : {}),
    },
    mocks: {
      $nuxt: {
        context: {
          $vuetify: vuetify.framework,
        },
      },
      ...(options.mocks ? options.mocks : {}),
    },
    sync: false,
  } as MountOptions)
}

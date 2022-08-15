import {
  createLocalVue,
  createWrappedComponent,
} from './unit/createWrappedComponent'
import DefaultPage from '@/components/templates/index.vue'

const localVue = createLocalVue()

describe('Default', () => {
  it('should be the same as Title', () => {
    const wrapper = createWrappedComponent(DefaultPage, {
      // propsData: { item },
      // localVue,
      // store,
      localVue,
      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
    })
    // クラス名を取得
    const title = wrapper.find('.title')
    expect(title.text()).toBe('Welcome to Fictional Company!')
  })
})

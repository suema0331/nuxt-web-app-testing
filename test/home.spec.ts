import { expect } from '@jest/globals';
import {
  createLocalVue,
  createWrappedComponent,
} from './unit/createWrappedComponent'
import HomePage from '@/components/home/home.vue'

const localVue = createLocalVue()

describe('Default', () => {
  it('should be the same as Title', () => {
    const wrapper = createWrappedComponent(HomePage, {
      localVue,
      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
    })
    // クラス名を取得
    const title = wrapper.find('.title')
    expect(title.text()).toBe('Let your self shine!')
  })
})

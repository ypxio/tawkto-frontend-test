import { mount } from '@vue/test-utils'
import RegularCardComponent from '../src/components/RegularCard.vue'

describe('Regular Card', () => {
  it('default title props', () => {
    const wrapper = mount(RegularCardComponent, {
      propsData: {
        title: 'Card title'
      }
    })
    const el = wrapper.find('h1.card__body__title--default')
    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('Card title')
  })
  it('default subtitle props', () => {
    const wrapper = mount(RegularCardComponent, {
      propsData: {
        subtitle: 'Card subtitle'
      }
    })
    const el = wrapper.find('h4.card__body__subtitle--default')
    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('Card subtitle')
  })
})
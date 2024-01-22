import { mount } from '@vue/test-utils'
import RegularCardComponent from '../src/components/RegularCard.vue'

describe('Regular Card', () => {
  it('show default title component when using props', () => {
    const wrapper = mount(RegularCardComponent, {
      propsData: {
        title: 'Card title'
      }
    })
    const el = wrapper.find('h1.card__body__title--default')
    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('Card title')
  })
  it('pass component as is when title slot provided', () => {
    const wrapper = mount(RegularCardComponent, {
      slots: {
        title: '<h2 class="title">Custom title</h2>'
      }
    })
    const el = wrapper.find('h2.title')
    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('Custom title')
  })
  it('hide default markup component when title slot provided', () => {
    const wrapper = mount(RegularCardComponent, {
      slots: {
        title: '<h3 class="title">Custom title</h3>'
      }
    })
    const el = wrapper.find('h1.card__body__title--default')
    expect(el.exists()).toBe(false)
  })
})
import { mount } from '@vue/test-utils'
import List from '@/list.vue'
import TestComponent from '@/test.vue'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('renders list of movies', () => {
  const wrapper = mount(List)
  const movies = wrapper.vm.$data.marvelMovies
  wrapper.setData({
    marvelMovies: [...movies, 'Endgame'],
  })

  expect(wrapper.html()).toMatchSnapshot()
})

import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('can add fruits to basket with DOM', () => {
  const wrapper = mount(FruitBasket)
  const input = wrapper.find('input')
  const button = wrapper.find('button')

  // Starts with empty list
  expect(wrapper.findAll('li').length).toBe(0)

  // Fill new fruit
  input.element.value = 'banana'
  input.trigger('input') // trig v-model
  expect(wrapper.vm.fruit).toBe('banana')

  // Add new fruit
  button.trigger('click')
  expect(wrapper.vm.fruit).toBe('') // input was cleaned
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))

  // Ends with a fruit
  // expect(wrapper.findAll('li').length).toBe(1)
})

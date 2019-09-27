import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode) {
    let that = el;

    let currentRotation = 0;
    let incrementRotation = binding.value.rotation || 90;

    if (binding.value.transition) that.style.transition = "transform 0.5s";

    el.addEventListener('dblclick', () => {
      currentRotation += incrementRotation;
      that.style.transform = `rotate(${currentRotation}deg)`;
    });
  }

});
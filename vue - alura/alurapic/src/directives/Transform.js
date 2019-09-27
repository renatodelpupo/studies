import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode) {

    let currentRotation = 0;
    let incrementRotation = binding.value || 90;

    if (binding.modifiers.transition) el.style.transition = "transform 0.5s";

    el.addEventListener('dblclick', () => {
      currentRotation += incrementRotation;
      el.style.transform = `rotate(${currentRotation}deg)`;
    });
  }

});
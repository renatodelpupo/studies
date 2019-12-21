export default {

  bind(el, binding, vnode) {

    // If have a modifier transition
    if (binding.modifiers.transition) el.style.transition = "transform 0.5s";


    // If meu-transform is a rotate one (or no args)
    if (binding.arc == 'rotate' || !binding.arg) {

      let angleRotation = 0;
      let incrementRotation = binding.value || 90;

      // Execute the rotation
      el.addEventListener('dblclick', () => {
        angleRotation += incrementRotation;
        el.style.transform = `rotate(${angleRotation}deg)`;
      });
    }


    // If meu-transform is a scale one
    if (binding.arg == 'scale') {

      let scale = binding.value || 1.5;

      // Execute the scale
      el.addEventListener('dblclick', () => {
        el.style.transform = `scale(${scale})`;
      })

    }
  }
};
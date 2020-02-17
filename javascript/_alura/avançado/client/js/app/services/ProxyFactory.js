class ProxyFactory {

  static create(object, props, action) {

    return new Proxy(object, {
      get(target, prop, receiver) {
        if (props.includes(prop) && typeof (target[prop]) == 'function') {
          return function () {
            console.log(`Property "${prop}" intercepted`)
            Reflect.apply(target[prop], target, arguments)
            return action(target)
          }
        } else {
          return Reflect.get(target, prop, receiver)
        }
      },

      set(target, prop, value, receiver) {
        if (props.includes(prop)) {
          target[prop] = value
          action(target)
        }

        return Reflect.set(target, prop, value, receiver)
      }
    })
  }
}

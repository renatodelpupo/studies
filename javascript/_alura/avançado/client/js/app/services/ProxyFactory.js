class ProxyFactory {

  static create(object, props, action) {

    return new Proxy(object, {
      get(target, prop, receiver) {
        if (props.includes(prop) && typeof (target[prop]) == 'function') {
          return function () {
            console.log(`Property "${prop}" intercepted`)
            const result = Reflect.apply(target[prop], target, arguments)
            action(target)
            return result
          }
        } else {
          return Reflect.get(target, prop, receiver)
        }
      },

      set(target, prop, value, receiver) {
        let result = Reflect.set(target, prop, value, receiver)
        if (props.includes(prop)) action(target)
        return result
      }
    })
  }
}

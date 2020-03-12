export function logExecutionTime(seconds: boolean = false) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      let divider = 1;
      let unit = 'milliseconds'

      if (seconds) {
        divider = 1000
        unit = 'seconds'
      }

      const t1 = performance.now()
      const result = originalMethod.apply(this, args)
      const t2 = performance.now()

      console.group('Log execution time')
      console.log(`Params of method ${propertyKey}: ${JSON.stringify(args)}`)
      console.log(`Result of method: ${JSON.stringify(result)}`)
      console.log(`${propertyKey} has been ${(t2 - t1) / divider} ${unit}`)
      console.groupEnd()

      return result
    }

    return descriptor
  }
}
// Globally available, not attached to "document"
let a = 'A'
console.log('`let a` globally available:', a) // A
console.log('`let a` on global object:', global.a) // undefined
console.log('`let a` on module:', module.exports.a) // undefined
console.log('-------')

// Globally available, not attached to "document"
global.b = 'B'
console.log('`global.b` globally available:', b) // B
console.log('`global.b` on global object:', global.b) // B
console.log('`global.b` on module:', module.exports.b) // undefined
console.log('-------')

// Globally available, attached to "document"
this.c = 'C'
console.log('`this.c` globally available:', '// c is not defined') // error
console.log('`this.c` on global object:', global.c) // undefined
console.log('`this.c` on module:', module.exports.c) // C
console.log('-------')

// Implicit declaration [not recommended]
d = 'D'
console.log('`d` globally available:', d) // D
console.log('`d` on global object:', global.d) // D
console.log('`d` on module:', module.exports.d) // undefined
console.log('-------')

// Curiosities
console.log('`this` refers to module exports?', module.exports === this) // true
console.log('Module exports content:', module.exports) // { c: 'C' }

// Common module export
module.exports = { e: 'E'}
console.log('Module exports redeclarated:', module.exports) // { e: 'E' }

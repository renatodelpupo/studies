// Two types of operators

// 1. Creation operators
const { from } = require('rxjs')

// 2. Pipeable operators
const { last, map } = require('rxjs/operators')

from([1, 2, 'Ana', false, 'last'])
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `The result is: ${v}`)
  )
  .subscribe(function (value) {
    console.log(value)
  })

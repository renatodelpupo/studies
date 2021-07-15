const { asyncScheduler, from } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Before sync...')
from([1, 2, 3, 4]).pipe().subscribe(console.log)
console.log('After sync...')

console.log('Before async...')
from([1, 2, 3, 4]).pipe(observeOn(asyncScheduler)).subscribe(console.log)
console.log('After async...')

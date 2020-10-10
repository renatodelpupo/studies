// import { Permissions } from '@/lib/permissions'

// mock up
let args = []

const Permissions = {
  granted(...params) {
    args.push([...params])
  }
}

// code
class User {}

const user = new User()

function isUserAdmin() {
  return Permissions.granted(user, 'admin')
}

// test
const test = function () {
  isUserAdmin()
  return JSON.stringify(args[0]) === JSON.stringify([user, 'admin'])
}

console.log(test())

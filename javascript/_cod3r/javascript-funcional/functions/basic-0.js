// How JavaScript works

/*
 * JavaScript is single threaded.
 *
 * It has a Stack and a Event Queue.
 *
 * Stack is executed by the thread.
 *
 * Methods like setTimeout adds functions to the Event Queue.
 *
 * The methods on Event Queue are added to Stack (i.e. executed) after the Stack is cleaned.
 */

function wait(time) {
  const future = Date.now() + time
  while (Date.now() < future) {}
}

setTimeout(() => console.log('second priority method added to event queue'), 2000)
setTimeout(() => console.log('first priority method added to event queue (lower time)'), 1000)

wait(2000)

console.log('first stack end')

// Output
/*
 * first stack end
 * first method added to event queue (lower time)
 * second method added to event queue
 */

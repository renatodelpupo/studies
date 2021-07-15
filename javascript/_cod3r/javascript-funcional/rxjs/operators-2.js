const { ajax } = require('rxjs/ajax')
const { XMLHttpRequest } = require('xmlhttprequest')

const { concatAll, map } = require('rxjs/operators')

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/renatodelpupo/repos',
})
  .pipe(
    map((resp) => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map((repo) => repo.full_name)
  )
  .subscribe(console.log)

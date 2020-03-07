export class HttpService {

  get(url) {
    return fetch(url)
      .then(res => this._handleErrors(res))
      .then(res => res.json())
  }

  _handleErrors(res) {
    if (!res.ok) throw new Error(res.statusText)
    return res
  }

  post(url, data) {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => this._handleErrors(res))
  }
}
class MessageView extends View {

  template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`
  }

  update(model: string) {
    this._element.innerHTML = this.template(model)
  }
}
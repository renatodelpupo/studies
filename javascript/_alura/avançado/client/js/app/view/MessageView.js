class MessageView extends View {

  template(model) {
    return typeof(model) == 'string' ? `<p class="alert alert-info">${model}</p>` : null
  }
}
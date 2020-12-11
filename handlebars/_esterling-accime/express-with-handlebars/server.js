const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'), // default path
  partialsDir: path.join(__dirname, 'views/partials'), // default path

  helpers: {
    // computed data
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },

    // method block
    head: function(tag, text, options) {
      options.fn({ tag, text })

      return `
        <${tag} class="Heading">
          ${text}
        </${tag}>
      `
    },

    // method block
    toItalic: function(text) {
      return text.italics()
    },

    // method inline
    toUppercase: function(text) {
      return text.toUpperCase()
    }
  }
})
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    breadcrumb: [
      {
        name: 'Home'
      }
    ],
    heading: 'Express with Handlebars',
    text: 'Welcome to the app.',
    title: 'Home'
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    breadcrumb: [
      {
        name: 'Home'
      },
      {
        name: 'About'
      }
    ],
    firstName: 'John',
    heading: 'About the project',
    lastName: 'Doe',
    paragraph: '<p><i>This is a italic paragraph</i></p>',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic assumenda. Odio ipsa amet enim adipisci suscipit nihil veritatis officia tenetur consequatur, quod eos, repellendus minus reiciendis maiores neque corrupti?',
    title: 'About'
  })
})

const appPort = 8080
app.listen(appPort, () => {
  console.log(`Server is starting at port ${appPort}`)
})

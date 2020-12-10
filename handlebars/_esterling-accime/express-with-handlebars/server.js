const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  })
)
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
    heading: 'About the project',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic assumenda. Odio ipsa amet enim adipisci suscipit nihil veritatis officia tenetur consequatur, quod eos, repellendus minus reiciendis maiores neque corrupti?',
    title: 'About'
  })
})

const appPort = 8080
app.listen(appPort, () => {
  console.log(`Server is starting at port ${appPort}`)
})

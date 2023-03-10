const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port}`)
})
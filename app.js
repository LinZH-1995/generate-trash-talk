const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generate-trash-talk.js')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({defaultLayout: 'main', helpers: require('./handlebars-helpers.js')}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {  
  const option = req.body
  const trashTalk = generateTrashTalk(req.body)
  res.render('index', {sentence: trashTalk, option: option})
})

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port}`)
})
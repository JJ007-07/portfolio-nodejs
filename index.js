const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  //res.send('Pagina Principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/privacidad', (req, res) => {
  res.render('privacidad', {
    titulo: "Sección de privacidad",
    descripción: "Aquí encontraras la privacidad del portafolio"
  })
})

app.get('/terminos', (req, res) => {
  res.render('terminos', {
    titulo: "Sección de terminos",
    descripción: "Aquí encontraras la privacidad del portafolio"
  })
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aquí http://localhost:${port}`)
})
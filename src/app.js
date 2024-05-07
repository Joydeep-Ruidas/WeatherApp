const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8000

// Public Static Path
// console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
const templatePath = path.join(__dirname, '../templates/views')
app.set('views', templatePath)

const partialPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialPath)

app.use(express.static(staticPath))

// Routing
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/weather', (req, res) => {
    res.render("weather")
})

app.get('*', (req, res) => {
    res.render("404err", {
        errMsg: 'Opps! Page Not Found'
    })
})

app.listen(port, () => {
    console.log(`Listening to the port number ${port}`)
})
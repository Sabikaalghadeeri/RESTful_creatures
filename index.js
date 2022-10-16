// npm i express express-ejs-layouts
const express = require ('express')
const ejsLayouts = require ('express-ejs-layouts')
const app = express()

app.set('view engine','ejs')
app.use(ejsLayouts)
app.use(express.urlencoded('./controllers/dinosaurs'))
app.use('/dinosaurs', require ('./controllers/dinosaurs'))

app.get('/', (req, res)=>{
    res.redirect('/dinosaurs')
})

app.listen(3500, ()=>{
    console.log('App listening on port 3500!')
})
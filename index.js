// npm i express express-ejs-layouts
const express = require ('express')
const ejsLayouts = require ('express-ejs-layouts')
const app = express()
const methodOverride = require ('method-override')
const bodyParser = require("body-parser")
// MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.urlencoded('./controllers/dinosaurs'))
app.use(methodOverride('_method'))
app.use('/dinosaurs', require ('./controllers/dinosaurs'))

app.get('/', (req, res)=>{
    res.redirect('/dinosaurs')
})
// Prehistoric Creatures
// app.use(express.urlencoded('./controllers/prehistoric_creatures'))
app.use('/prehistoric_creatures', require ('./controllers/prehistoric_creatures'))
app.get('/', (req, res)=>{
    res.redirect('/prehistoric_creatures')
})

app.put('/:idx', (req, res) => {
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json');
    let prehData = JSON.parse(prehistoric_creatures);
  
    prehData[req.params.idx].name = req.body.name;
    prehData[req.params.idx].type = req.body.type;
  
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehData));
    res.redirect('/prehistoric_creatures');
  });

app.listen(3500, ()=>{
    console.log('App listening on port 3500!')
})
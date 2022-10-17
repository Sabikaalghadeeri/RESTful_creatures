const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res)=>{
    let dinosaurs = fs.readFileSync ("./dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs);
    console.log(dinoData)
    res.render('dinosaurs/index', {myDino: dinoData})
    // res.send('Hello!')
})

 router.get('/new', (req, res)=>{
    res.render('dinosaurs/new')
 })

 
 router.post('/', (req, res)=>{
    console.log('This is the Request Body: ', req.body)
    
    let dinosaurs= fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    dinoData.push(req.body)
    fs.writeFileSync("./dinosaurs.json", JSON.stringify(dinoData))
    //JSON stringify makes it back into json data
    res.redirect('/dinosaurs')
   })
   
   router.delete('/:idx', (req, res) =>{
      console.log('This is my req Params object', req.params)
      let dinosaurs = fs.readFileSync('./dinosaurs.json')
   let dinoData = JSON.parse(dinosaurs)
   
   // remove the deleted dinosaur from the dinosaurs array
   dinoData.splice(req.params.idx, 1)
   
   // save the new dinosaurs to the data.json file
   fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
   
   //redirect to the GET /dinosaurs route (index)
   res.redirect('/dinosaurs')
})

router.get('/edit/:idx', (req, res) => {
   // Grab dino data
   let dinosaurs =fs.readFileSync ('./dinosaurs.json')
   let dinoData = JSON.parse(dinosaurs)
   // Display edit page
   res.render('dinosaurs/edit',{
      dino: dinoData[req.params.idx], dinoId: req.params.idx
   })
})
router.get('/:idx', (req, res)=>{
   let dinosaurs =fs.readFileSync('./dinosaurs.json')
   let dinoData = JSON.parse(dinosaurs);
   let dinoIndex = parseInt(req.params.idx)
   res.render('dinosaurs/shows', {myDino:dinoData[dinoIndex]})
})

router.put('/:dinoId', (req, res) => {
   let dinosaurs = fs.readFileSync('./dinosaurs.json')
   // Parse JSON into JS Object 
   let dinoData = JSON.parse(dinosaurs)
// Update our dinosaurs with form data
// req.params -----> {dinoId: '5'}
dinoData[req.params.dinoId].name = req.body.name
dinoData[req.params.dinoId].type = req.body.type
// update our json file with new data
fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
// redirect to home page
res.redirect('/dinosaurs')
})

module.exports = router
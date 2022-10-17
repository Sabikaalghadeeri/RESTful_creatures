const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync ('./prehistoric_creatures.json')
    let prehData = JSON.parse(prehistoric_creatures);
    console.log(prehData)
    res.render('prehistoric_creatures', {myPrehCreatures: prehData})
    // res.send('Hello!')
})

 router.get('/new', (req, res)=>{
    res.render('prehistoric_creatures/new')
 })

 router.get('/:idx', (req, res)=>{
    let prehistoric_creatures =fs.readFileSync('./prehistoric_creatures.json')
    let prehData = JSON.parse(prehistoric_creatures);
    let prehIndex = parseInt(req.params.idx)
    res.render('prehistoric_creatures/shows', {myPrehCreatures:prehData[prehIndex]})
 })

 router.post('/', (req, res)=>{
    console.log('This is the Request Body: ', req.body)
    res.redirect('/prehistoric_creaturesprehistoric_creatures')
 })
//  DELETE
 router.delete('/:idx', (req, res) => {
   let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
   let prehData = JSON.parse(prehistoric_creatures)
 
   // remove the deleted dinosaur from the dinosaurs array
   prehData.splice(req.params.idx, 1)
 
   // save the new dinosaurs to the data.json file
   fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehData))
 
   //redirect to the GET /dinosaurs route (index)
   res.redirect('/prehistoric_creatures')
 })


 router.get('/edit/:idx', (req, res) => {
   let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
   let prehData = JSON.parse(prehistoric_creatures);
   res.render('prehistoric_creatures/edit', {myPrehCreatures: prehData[req.params.idx], dinoId: req.params.idx});
 })

 router.put('/:dinoId', (req, res) => {
   let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
   let prehData = JSON.parse(prehistoric_creatures)
// Update our dinosaurs with form data
// req.params -----> {dinoId: '5'}
prehData[req.params.dinoId].name = req.body.name
prehData[req.params.dinoId].type = req.body.type
// update our json file with new data
fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehData))
res.redirect('/prehistoric_creatures')
})


module.exports = router
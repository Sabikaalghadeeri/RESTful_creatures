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

 router.get('/:idx', (req, res)=>{
    let dinosaurs =fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
    let dinoIndex = parseInt(req.params.idx)
    res.render('dinosaur/show', {myDino:dinoData[dinoIndex]})
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
module.exports = router;
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
    res.redirect('/dinosaurs')
 })


module.exports = router;
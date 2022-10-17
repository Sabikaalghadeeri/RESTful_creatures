const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync ("./prehistoric_creatures.json")
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
    res.render('prehistoric_creature/show', {myPrehCreatures:prehData[prehIndex]})
 })

 router.post('/', (req, res)=>{
    console.log('This is the Request Body: ', req.body)
    res.redirect('/prehistoric_creaturesprehistoric_creatures')
 })


module.exports = router;
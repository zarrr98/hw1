const express = require('express')
const {readData ,writeData }= require('../../readwrite')
const inside = require('point-in-polygon');



const router = express.Router();

router.get('/testpoint',(req , res , next) => {
    const {lat , long} = req.body
    let data = readData()
    let polygons = []
    //console.log(data)
    let {features} = data
    features.map((item , i) => {
        let polygon = item.geometry.coordinates[0]
        //console.log('polygon => ',polygon)
        if (inside([long , lat] , polygon)){
            polygons.push(item.properties.name)
        }
    })
    res.status(200).json({
        polygons,
    })

    
})

router.put('/addpolygon',(req , res , next) => {
    const gis = {
        type : req.body.type,
        properties : req.body.properties ,
        geometry : req.body.geometry,
        
    }
    //add the gis to the db
    writeData(gis)
    res.status(200).json({
        message : 'GIS added successfully.',
        gis,
    })
})

module.exports = router
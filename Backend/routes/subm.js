const express = require('express')
const router = express.Router()
const upload = require('../models/image')
// const upload = require('./image')
const submdata = require("../models/Data")
var fs = require('fs');
// var path = require('path')
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.post('/', upload.single('image'), (req, res) => {
    const newsubm = new submdata({
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description,
        img:
        {
            data: fs.readFileSync("./uploads/"+ req.file.filename),
            contentType: 'image/png'
        },
        hack_name: req.body.hack_name,
        hack_start_date: req.body.hack_start_date,
        hack_end_date: req.body.hack_end_date,
        gh_rep: req.body.gh_rep,
        o_link: req.body.o_link,
        current_date: req.body.current_date
      })
    
      newsubm.save().then(res.send("Successfully Uploaded"))
})

router.post('/getdata', async (req, res)=>{
    const data = await submdata.find()
    res.json(data)
})

router.post('/getpartdata', (req,res)=>{
    res.send("hello")
})

module.exports = router
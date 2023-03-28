const connect = require('./database')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const router = express.Router()
// const multer = require('multer')
// var path = require('path');
// var fs = require('fs');
// const submdata = require("./models/Data")

// app.use(express.static("/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/subm', require('./routes/subm'))

connect()
// const Storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads")
//   },
//   filename: (req, file, cb) => {
//       // cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//       cb(null, file.originalname)
//   }
// })

// const upload = multer({ storage: Storage });

app.get('/', (req, res) => {
  res.send('Hello Ajay!')
})

// app.post('/api/subm', upload.single("image"), (req, res) => {
  
//   const newsubm = new submdata({
//     title: req.body.title,
//     summary: req.body.summary,
//     description: req.body.description,
//     img:
//     {
//         data: fs.readFileSync("uploads/"+ req.file.filename),
//         contentType: 'image/png'
//     },
//     hack_name: req.body.hack_name,
//     hack_start_date: req.body.hack_start_date,
//     hack_end_date: req.body.hack_end_date,
//     gh_rep: req.body.gh_rep,
//     o_link: req.body.o_link
//   })

//   newsubm.save().then(res.send("Successfully Uploaded")).catch((err)=>res.send(err))
// })

app.listen(5000, () => {
  console.log("server started running at port 5000")
})
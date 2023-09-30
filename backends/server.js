const express = require('express')
const app = express()
const cors= require('cors')
const cookieParser= require('cookie-parser')
const PORT = process.env.PORT || 4500;
const bodyParser= require('body-parser')

app.use(express.json());
app.use(express.static(__dirname)); 
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get("/", (req, res)=>{
console.log("welcome to property app")
return res.send({message: "welcome to property app"});
})

let routes=require('./routes/index')
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

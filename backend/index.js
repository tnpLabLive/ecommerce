const express = require('express')
const app = express()


const PORT = process.env.PORT || 4004

app.listen(PORT, ()=>{
    console.log("server running on ", PORT)
})
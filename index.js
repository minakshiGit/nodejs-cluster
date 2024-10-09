const express = require('express')

const app = express()
const PORT =5000
app.get('/', (req, res) => { 
   // res.json({ Messaage: `Hello message from express server` })
     res.json({Messaage :`Hello message from express server ${process.id}`})
    
})
app.listen(5000, () => {  
    console.log(`server started at PORT:${PORT}`)
    
})
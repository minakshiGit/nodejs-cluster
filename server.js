const cluster = require('cluster')
const os = require('os')
const express = require('express')
const totalCPU = os.cpus().length
if (cluster.isPrimary) {
    // Fork workers.
  for (let i = 0; i < totalCPU; i++) {
    cluster.fork();
  }

} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    const app = express()
    const PORT = 5000
    app.get('/', (req, res) => { 
   // res.json({ message: `Hello message from express server` })
     res.json({message :`Hello message from express server ${process.pid}`})
    
    })
    app.listen(5000, () => {  
    console.log(`server started at PORT:${PORT}`)
    console.log(process.env.myName)
    })
}

import 'dotenv/config'
import express from 'express'

const app = express()
const port = 3000

console.log('App listening on port ' +  port)

app.listen(port, () =>
  console.log('Hi folks! The secret is ' + process.env.MY_SECRET),
)

  

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const { getHouses, createHouse, deleteHouse, updateHouse } = require('./controller.js')

app.get('u/api/houses', getHouses)



app.post('/api/houses', createHouse)



app.delete('/api/houses/:id', deleteHouse)



app.put('/api/houses/:id', updateHouse)





const server_port = 4004;
app.listen(server_port, ()=>{
    console.log(`up on ${server_port}`)
})
const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 avage': {
        'birthAge':  29,
        'birthName': "Sheyaa Bin Abraham-Joseph",
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'birthAge':  29,
        'birthName': "Chancelor Bennett",
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'birthAge':  0,
        'birthName': "Unknown",
        'birthLocation': 'Unknown'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
   const rapperName = request.params.name.toLowerCase()
   if (rappers[rapperName]){
       response.json(rappers)
   }else{
       response.json(rappers['unknown'])
   }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})
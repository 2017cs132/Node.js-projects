const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=45&lon=-47&exclude=minutely,hourly&units=imperial&appid=7f7da5b2fe8af6874af299518cacc474' 

const request= https.request(url, (response)=>{
    let data=''

    response.on('data',(chunk)=>{data=data+chunk.toString()})

    response.on('end',()=>{const body= JSON.parse(data)
    
        console.log(body)}
    )}

)
request.end()
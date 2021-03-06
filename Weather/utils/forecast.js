const axios=require('axios')

const forecast=(latitude,longitude,callback)=>{

    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=minutely,hourly&units=imperial&appid=7f7da5b2fe8af6874af299518cacc474')
    .then((Response)=>{
       
        if(Response.data.message=='wrong latitude')
        {
           callback('Unable to find location!, Try again',undefined)
        }
        else
        {
            callback(undefined,'It is currently '+Response.data.current.temp+ ' degrees and '+ ' there is ' +Response.data.current.humidity+'% humidity in air')
        } 
     })
     .catch((error)=>{
        callback('Unable to connect to Weather Services!',undefined)
     })

}

module.exports = forecast
const axios=require('axios')

const geocode=(address,callback)=>{

    const URL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?limit=1&access_token=pk.eyJ1IjoiYWZyb3pzaGFoaWQxIiwiYSI6ImNraWN3YXRhaDBxc2YycmswdTJ1aXJ5dzYifQ.1bps0QuRf8CHhL-YrjQEqw'
    axios.get(URL)
    .then((Response)=>{
       
       if(Response.data.features.length===0)
       {
          callback('Unable to find location!, Try again',undefined)
       }
       else
       {
          callback(undefined,{
             latitude: Response.data.features[0].center[0],
             longitude: Response.data.features[0].center[0],
             location: Response.data.features[0].place_name
          })
       } 
    })
    .catch((error)=>{
       callback('Unable to connect to location Services!',undefined)
    })
 }

 module.exports = geocode
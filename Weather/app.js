const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

geocode('Boston',(error, Response)=>{
   console.log('Error:',error)
   console.log('Data:',Response)
})

forecast(-75.7088,44.1545,(error,Response)=>{
   console.log('Error:',error)
   console.log('Data:',Response) 
})

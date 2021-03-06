const fs=require('fs')

const buffer=fs.readFileSync('1-json.json')
const data=buffer.toString()
const mydata=JSON.parse(data)
mydata.name='Afroz Shahid'
mydata.age='21'
mydata.planet='Mars'
const newinfo=JSON.stringify(mydata)
fs.writeFileSync('1-json.json',newinfo)


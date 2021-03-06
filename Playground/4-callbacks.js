const add = (a,b,callback)=>
{
    setTimeout(()=>{

        sum= a+b
        console.log('Two seconds are up')
        callback(sum)
 
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})
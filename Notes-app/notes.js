const fs=require('fs')
const chalk=require('chalk')
const { title } = require('process')
const getNotes = function()
{
    const string_notes ='My notes...'
    return string_notes
}

const addnotes=(title,body)=>
{
    const mynotes=loadnotes()
    const duplicate= mynotes.find((note)=>note.title===title)
    debugger
    if(!duplicate)
    {

        mynotes.push
        (
            {title: title,
            body: body
             }
        )
    savenotes(mynotes)
    console.log(chalk.greenBright.inverse('New Note Added'))
    }
    else
    {
        console.log('Duplicate Note Exists')
    }

}

const removenotes= (title)=>
{
    const mynotes=loadnotes()
    const notestokeep=mynotes.filter((note)=>note.title!==title)
    if(mynotes.length>notestokeep.length)
    {
        console.log(chalk.green.inverse('Note removed!'))
        savenotes(notestokeep)
    }
    else
    {
        console.log(chalk.red.inverse('No Note Found!'))
    }

}

const loadnotes=()=>
{
    try
    {
        const bufferdata=fs.readFileSync('notes.json')
        const data=bufferdata.toString()
        const Notes=JSON.parse(data)
        return Notes
    }
    catch(error)
    {
        return []
    }
}

const savenotes=(notes)=>
{
    const notesjson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesjson)
}

const listnotes=()=>
{
    const mynotes=loadnotes()
    console.log(chalk.blueBright.inverse('Your Notes...'))
    mynotes.forEach((note)=>{console.log(note.title)})

}

const readnotes=(title)=>
{
const mynotes=loadnotes()
const find=mynotes.find((note)=>note.title===title)
if(find)
{
    console.log(chalk.greenBright.inverse(find.title))
    console.log(find.body)
}
else
{
    console.log(chalk.red.inverse('Note not found'))
}

}
module.exports = 
{
getNotes: getNotes,
addnotes: addnotes,
removenotes: removenotes,
listnotes: listnotes,
readnotes: readnotes
}
const notes= require('./notes.js')
const yargs= require('yargs')
const { string, describe, command } = require('yargs')

// Adding the Add command to add new notes
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder:
    {
        title: 
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
        describe: 'Body of the new note',
        demandOption: true,
        type:'string'
        }
    },
    handler(argv)
    {
        notes.addnotes(argv.title,argv.body)
    }
})


yargs.command(
    {
      command: 'remove',
      describe: 'A command to remove existing notes',
      builder:
        { title: 
            {
            describe: 'title of the note to be removed',
            demandOption: true,
            type: 'string'
            }
        },
        handler(argv)
        {
            notes.removenotes(argv.title)
        }
    })

    yargs.command(    
    {   command: 'list',
        describe: 'A command to list all the notes',
        handler(argv)
        {
            notes.listnotes()
        }
    }
    )

yargs.command(
    {
        command: 'readnotes',
        describe: 'A command to read notes',
        builder: 
        {
            title: {
                describe: 'Title of the note to be read',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv)
        {
            notes.readnotes(argv.title)
        }
    }
)

yargs.parse()
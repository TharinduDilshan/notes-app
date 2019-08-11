const chalk = require('chalk')

const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    /*
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
    */
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    /*
    handler: function(argv){
        notes.removeNote(argv.title)
        console.log('Removing a new note!')
    }
    */
    handler(argv){
        notes.removeNote(argv.title)
        console.log('Removing a new note!')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    /*
    handler: function(){
        console.log('Listing out all notes!')
    }
    */
    handler(){
        notes.listNotes()                       
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
     builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Reading a note!')
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)
yargs.parse()
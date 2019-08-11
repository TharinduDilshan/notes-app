const fs = require('fs')
const chalk = require('chalk')

/*
const getNotes = function(){
    return 'My note' 
}
*/

/*
const getNotes = () =>{
    return 'My note' 
}
*/

const addNote = (title, body) =>{
    const notes = loadNotes()

/*
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    */

    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
        title: title,
        body: body
    })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!'))
    }    
}

/*
const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
        title: title,
        body: body
    })
        saveNotes(notes)
        console.log.chalk.green.inverse('New note added!')
    }else{
        console.log.chalk.red.inverse('Note title taken!')
    }    
}
*/

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title === title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note removed"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note removed'))
    }
}

const listNotes =() => {
    const notes = loadNotes()

    //console.log(chalk.inverse('Your notes'))
    console.log(chalk.inverse('Listing out all notes!'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

/*
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title === title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note removed"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note removed'))
    }
}
*/

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

/*
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
*/

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }  
}

/*
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }  
}
*/

module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
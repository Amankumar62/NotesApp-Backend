
// console.log('notes.js')
// const name = 'Babbar'
// const getNotes = function(){
//     return 'your notes'
// }
// module.exports = getNotes;
const chalk = require('chalk')
const fs = require('fs')

const getNotes = ()=>{
  

}
const listNotes = () => {
    console.log(chalk.inverse.white("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note) => console.log(chalk.green.inverse(note.title)))
    
}
const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })   
    const duplicateNote = notes.find( (note) => note.title === title )
    // console.log(duplicateNotes)
    if(!duplicateNote){
    notes.push({ 
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green("New note added!")) 
    }else{
            console.log(chalk.red("Title taken!"))
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesEdit = notes.filter(function(note){
        return note.title !== title
    })
    if(notesEdit.length == notes.length){
        console.log(chalk.inverse.red("Title not found!"))
    }
    else{
        saveNotes(notesEdit)
        console.log(chalk.inverse.green("Note Removed"))
    }


}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJson =  databuffer.toString()
        const dataObj = JSON.parse(dataJson)
        return dataObj
    }
    catch(e){
        return []
    }
   

}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote:removeNote,
    listNotes:listNotes,
}
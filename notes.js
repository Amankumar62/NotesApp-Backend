
// console.log('notes.js')
// const name = 'Babbar'
// const getNotes = function(){
//     return 'your notes'
// }
// module.exports = getNotes;
const fs = require('fs')

const getNotes = function(){
  

}
const addNote = function(title,body){
    const notes = loadNotes()

    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes) 
}
const removeNote = function(){

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
    removeNote:removeNote
}
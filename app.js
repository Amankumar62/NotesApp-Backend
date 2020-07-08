const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes')

yargs.command({
    command:'add',
    describe:'Add a new Notes',
    builder : {
        title:{
            describe:'Notes title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Title ' + argv.title+' Body '+argv.body)
        note.addNote(argv.title,argv.body)

    }
})
yargs.command({
    command:'remove',
    describe:'removes the notes',
    builder:{
        title:{
            describe:'Title of the note to be removed',
            demandOption:true,
            type:"string"

        }
    },
    handler(argv){
        // console.log('Removing the notes')
        note.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'list down all the notes',
    handler(){
        note.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'reads the notes',
    handler(){
        console.log('Reads the notes')
    } 
})
// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()


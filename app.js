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
    handler : function(argv){
        // console.log('Title ' + argv.title+' Body '+argv.body)
        note.addNote(argv.title,argv.body)

    }
})
yargs.command({
    command:'remove',
    describe:'removes the notes',
    handler : function(){
        console.log('Removing the notes')
    }
})
yargs.command({
    command:'list',
    describe:'list down all the notes',
    handler:function(){
        console.log('Listing down notes')
    }
})
yargs.command({
    command:'read',
    describe:'reads the notes',
    handler : function(){
        console.log('Reads the notes')
    } 
})
// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()


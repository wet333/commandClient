const Core = require('./core/core.js');

const action = Core.createAction(process.argv);

if(process.argv.length !== 0){
    Core.execute(action.command, action.subcommand, action.args);
}else{
    console.log("No commands given.\n");
}
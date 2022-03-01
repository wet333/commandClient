const {exec} = require('child_process');

function execute(command, subcommand, args) {
    
    // Path to resource
    const pathToCommand = "./commands/" + command + "/" + subcommand +".js"; 
    
    // Argument list
    let argumentString = "";
    args.forEach(argument => {
        argumentString = argumentString + " \"" + argument + "\"";
    });

    // Execute file
    console.log("Executing ==> node " + pathToCommand + argumentString);
    exec("node " + pathToCommand + argumentString);
}

function createAction(args) {
    // Discard the first 2 elements
    args.shift();
    args.shift();

    let command = args[0];
    let subcommand = args[1];

    // Discard command and subcommand from array
    args.shift();
    args.shift();

    let arguments = args;

    return {
        command: command,
        subcommand: subcommand,
        args: args
    }
}

exports.execute = execute;
exports.createAction = createAction;
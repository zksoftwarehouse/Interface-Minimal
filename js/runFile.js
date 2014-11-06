function run_cmd(cmd, args, cb, end){
    child.stdout.on('end', end);
}

function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me    = this;
    
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);

    child.on('exit', function (code) {
        var cod = code;

        console.log('CODIGO RETURN: ' + cod);
    });
}

function run(str){
    var foo = new run_cmd(
        '/home/natan/Documentos/Natan/Interface-Minimal/Files/helloworld', [str],

        function (me, buffer) { 
            me.stdout += buffer.toString() 
            var vt     = parseInt(buffer.toString())
            
            switch(vt){
                case 1:
                    console.log("UM")
                    break;

                case 2:
                    console.log("DOIS")
                    break;

                case 3:
                    console.log("TRES")
                    break;
                }
            },
        
        function () { 
            //console.log(foo.stdout) 
        }
    );
}
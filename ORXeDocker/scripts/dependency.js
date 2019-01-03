

const comp = require('../src/app/componentList');

function execute() {
    console.log("working");
    var component;

    for (var loopvariable1 = 0; loopvariable1 < comp.compList.length; loopvariable1++) {
        component = comp.compList[loopvariable1]
        if (component.moduleDetails != null) {
            for (var loopvariable2 = 0; loopvariable2 < component.moduleDetails.modulePath.length; loopvariable2++) {
                var json = require('../package.json');
                if (json.dependencies[component.moduleDetails.modulePath[loopvariable2]] == null) {
                    var commandtoRun = "npm install " + component.moduleDetails.modulePath[loopvariable2] + "@" + component.moduleDetails.version[loopvariable2];
                    f(commandtoRun);
                }
            }
        }
    }
}


execute();

function f(commandtoRun) {
    const exec = require('child_process').execSync

                exec(commandtoRun, (err, stdout, stderr) => {
                    console.log("hiiiiii",stdout);
                    process.stdout.write(stdout)
                })
            
    return 1;
  }


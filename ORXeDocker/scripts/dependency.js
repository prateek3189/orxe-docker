

const comp = require('../src/app/componentList');

function execute() {
    console.log("working");
    var component;
    var customComponentsPath = "src\\app\\customiseComponents ";
    var finalTerminalCommand, githublink, firsthalf, secondehalf, componentName;
    var startIndex, lastIndex;
    for (var loopvariable1 = 0; loopvariable1 < comp.compList.length; loopvariable1++) {
        component = comp.compList[loopvariable1]
        if (component.moduleDetails != null) {
            for (var loopvariable2 = 0; loopvariable2 < component.moduleDetails.modulePath.length; loopvariable2++) {
                var json = require('../package.json');
                if (json.dependencies[component.moduleDetails.modulePath[loopvariable2]] == null) {
                    var commandtoRun = "npm install " + component.moduleDetails.modulePath[loopvariable2] + "@" + component.moduleDetails.version[loopvariable2];
                    terminalCommandRunner(commandtoRun);
                }
            }
        }
        githublink = component.githubCode;
        if (githublink != null) {
            componentName = githublink.substring(githublink.lastIndexOf('/') + 1, githublink.length);
            startIndex = githublink.indexOf('tree');
            firsthalf = githublink.substring(0, startIndex);
            lastIndex = githublink.substring(startIndex + 5).indexOf('/');
            secondehalf = githublink.substring(startIndex + 4 + lastIndex + 1, githublink.length);
            githublink = firsthalf + 'trunk' + secondehalf;
            finalTerminalCommand = "cd " + customComponentsPath + " && " + 'if exist ' + componentName + ' (echo yes) else (svn export ' + githublink + ')';
            console.log(finalTerminalCommand);
            terminalCommandRunner(finalTerminalCommand);
        }
    }
}


execute();

function terminalCommandRunner(commandtoRun) {
    console.log("hello");
    const exec = require('child_process').execSync

                exec(commandtoRun, (err, stdout, stderr) => {
                    console.log("hiiiiii",stdout);
                    process.stdout.write(stderr)
                })
    return 1;
  }

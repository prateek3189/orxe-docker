const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());
debugger;
app.post('/posts/check', (req,res) => {
    console.log("hi");
    let file_path = 'D:\\ORXe 3.0 Docker\\v9\\orxe-docker\\ORXeDocker\\src\\test.ts';
    let commandtoRun = "ng test";
    const exec = require('child_process').execSync

                exec(commandtoRun, (err, stdout, stderr) => {
                    console.log("Error: ",stderr);
                    console.log("Success: ",stdout);
                    process.stdout.write(stderr)
                })
    res.send("Success");
    console.log("finish");
});

// app.get('/', (req,res) => {
//     res.send('App Works')
// });

app.listen(3000, () => console.log('Listening on port 3000'))
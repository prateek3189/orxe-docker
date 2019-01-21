const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.post('/posts/check', (req,res) => {
    console.log("hi");
    //var file_path = 'D:\\ORXe 3.0 Docker\\v10\\orxe-docker\\ORXeDocker\\src\\test.ts';
    var file_path = 'src\\test.ts';
    fs.readFile(file_path, function(err, data) {
        if(err) {
            console.log(err);
            throw error
        }
        var file_content = data.toString();
        console.log(req.body.compName);
        var lastindex = file_content.lastIndexOf(".component.spec.ts$/");
        var startindex = file_content.indexOf("require.context('./', true,");
        var replacestring = file_content.substring(startindex,lastindex);
        var write_text = file_content.replace(replacestring, "require.context('./', true, /"+req.body.compName);
        fs.writeFileSync(file_path, '');
        fs.writeFileSync(file_path , write_text);
    });
    res.send("Success");
});

app.get('/', (req,res) => {
    res.send('App Works')
});

app.listen(3000, () => console.log('Listening on port 3000'))
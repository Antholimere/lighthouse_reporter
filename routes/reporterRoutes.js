const util = require("util");
const fs = require('fs');

module.exports = app => {
  app.get("/api/lighthouse_report", async (req, res) => {
    let url, obj;
    url = req.query.url;

    const exec = util.promisify(require("child_process").exec);
    fs.writeFile("myfile.json", "{}", function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });

    async function terminal_command(command, callback){
      exec(command, {maxBuffer: 1024 * 500}, function(error, stdout, stderr){
        console.log('running post-terminal command')
        console.log('found file')
        fs.readFile('myfile.json', handleFile)

        // Write the callback function
        function handleFile(err, data) {
          if (err) throw err
          obj = JSON.parse(data)
          let result = {}
          result.performance = obj["categories"]["performance"]["score"]
          result.pwa = obj["categories"]["pwa"]["score"]
          result.accessibility = obj["categories"]["accessibility"]["score"]
          result.bestPractices = obj["categories"]["best-practices"]["score"]
          result.seo = obj["categories"]["seo"]["score"]
          // You can now play with your datas
          res.send(result)

          fs.unlink('myfile.json',function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
          });
        }
      });
    };

    await terminal_command(`lighthouse ${url} --quiet --chrome-flags="--headless" --output json --output-path myfile.json`, file_callback)

    async function file_callback() {
      console.log('running post-terminal command')
      console.log('found file')
      fs.readFile('myfile.json', handleFile)

      // Write the callback function
      function handleFile(err, data) {
        if (err) throw err
        obj = JSON.parse(data)
        console.log(obj)
        // You can now play with your datas
      }
    }
  });
};

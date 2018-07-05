const util = require('util');

module.exports = app => {
  app.post("/api/lighthouse_report", async (req, res) => {
    const exec = util.promisify(require('child_process').exec);

    async function terminal_command() {
      const { stdout, stderr } = await exec('ls');
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
    }

    await terminal_command();

    res.send(200)
    res.send(stdout)
  })
}

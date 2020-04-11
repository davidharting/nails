// Figure out where came from
// Figure out how to redirect without .redirect available

const handleForm = require("../../handlers/form");

function handle(req, res) {
  const done = handleForm(req, res);
  return done(null, "/home");
}

export default handle;

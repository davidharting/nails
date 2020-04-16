// TODO: When redirecting back to form due to errors,
// How to get the errors propagated?
// I can probably set the errors as query strings and have them parsed by getServerSideProps
// But that seems somewhat non-standard
import { NextApiResponse } from "next";

function redirect(res: NextApiResponse, to) {
  res.writeHead(303, { Location: to });
  return res.end();
}

function handleForm(req, res) {
  try {
    const requesterUrl = req.headers.referer;

    if (req.method !== "POST") {
      return redirect(res, requesterUrl);
    }

    return (errors, to) => {
      const Location = errors ? requesterUrl : to;
      res.writeHead(301, { Location });
      return res.end();
    };
  } catch (err) {
    return redirect(res, "/500");
  }
}

module.exports = handleForm;

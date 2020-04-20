// TODO: When redirecting back to form due to errors,
// How to get the errors propagated?
// I can probably set the errors as query strings and have them parsed by getServerSideProps
// But that seems somewhat non-standard
import { NextApiRequest, NextApiResponse } from "next";

function redirect(res: NextApiResponse, to: string): void {
  res.writeHead(303, { Location: to });
  return res.end();
}

type HandleFormCallback = (error: Error, to?: string) => void;
type HandleFormResult = void | HandleFormCallback;

function handleForm(
  req: NextApiRequest,
  res: NextApiResponse
): HandleFormResult {
  try {
    const requesterUrl = req.headers.referer;

    if (req.method !== "POST") {
      return redirect(res, requesterUrl);
    }

    return (errors: Error, to: string): void => {
      const Location = errors || !to ? requesterUrl : to;
      res.writeHead(301, { Location });
      return res.end();
    };
  } catch (err) {
    return redirect(res, "/500");
  }
}

export default handleForm;

import { tabel, formatRecords } from "./utils/Airtable";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res);
  const userId = user.sub;
  if (req.method !== "POST") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  const fields = req.body;
  const data = { ...fields, userId };
  console.log(data);
  try {
    const records = await tabel.create([{ fields }]);
    const createdRecords = formatRecords(records);
    res.statusCode = 200;
    res.json(createdRecords[0]);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
});

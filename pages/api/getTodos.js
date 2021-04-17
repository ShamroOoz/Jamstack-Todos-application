import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  if (req.method !== "GET") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  try {
    const records = await tabel.select({}).firstPage();
    res.statusCode = 200;
    res.json(formatRecords(records));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ errormsg: "Something went wrong" });
  }
};

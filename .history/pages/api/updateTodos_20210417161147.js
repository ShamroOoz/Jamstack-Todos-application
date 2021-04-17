import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  const { id, fields } = req.body;
  try {
    const records = await tabel.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(formatRecords(records));
  } catch (error) {
    console.error(error);
  }
};

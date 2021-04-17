import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  const fields = req.body;
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
};

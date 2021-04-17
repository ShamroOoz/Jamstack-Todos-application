import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  const fields = req.body;
  try {
    const records = await tabel.create([{ fields }]);
    res.statusCode = 200;
    res.json(formatRecords(records));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ errormsg: "Something went wrong" });
  }
};

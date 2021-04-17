import { tabel, formatRecords } from "./api/utils/Airtable";

export default async (req, res) => {
  if (req.method !== "PUT") {
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
